import React, { useRef } from "react";
import active from "./ActiveObject.module.css";
import { Color, Transform } from "../../../../model/types";
import { useDragAndDrop } from "../../../../hook/useDND";
import { selectEditor } from "../../../../redux/selectors";
import { useAppSelector, useAppActions } from "../../../../redux/hooks";

type ActiveObjectViewProps = {
  isSelected: boolean;
  className: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  children: React.ReactNode;
  background?: Color;
  transform: Transform;
};

function ActiveObjectView({
  isSelected,
  className,
  children,
  position: { x, y },
  size: { width, height },
  background,
  transform,
}: ActiveObjectViewProps) {
  const { createChangeElementPosition, createChangeElementSize } =
    useAppActions();
  const editorInfo = useAppSelector(selectEditor);
  const activeCanvasId = editorInfo.active;
  const selectedCanvas = editorInfo.canvas.find(
    (canvas) => canvas.id === activeCanvasId,
  );
  const activeElementId = selectedCanvas ? selectedCanvas.active : "";
  const classNames = `${active.container} ${
    isSelected ? active.selected : active[className]
  }
  `;
  const refMiddleButton = useRef<HTMLDivElement>(null);
  const refResizMiddleRight = useRef<HTMLDivElement>(null);
  const refResizeDownRight = useRef<HTMLDivElement>(null);
  const refResizeUpMiddle = useRef<HTMLDivElement>(null);
  const refResizeUpRight = useRef<HTMLDivElement>(null);
  const refResizeMiddleLeft = useRef<HTMLDivElement>(null);
  const refResizeDownLeft = useRef<HTMLDivElement>(null);
  const refResizeUpLeft = useRef<HTMLDivElement>(null);
  let blockSize = {
    width,
    height,
  };

  let blockPostition = {
    x,
    y,
  };

  const ref = useRef<HTMLDivElement>(null);

  const { isDragging } = useDragAndDrop(
    { elementRef: ref, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        blockSize = {
          width,
          height,
        };
        createChangeElementSize(activeCanvasId, activeElementId, blockSize);
        blockPostition = {
          x: x + delta.x,
          y: y + delta.y,
        };
        createChangeElementPosition(
          activeCanvasId,
          activeElementId,
          blockPostition,
        );
      },
    },
  );

  useDragAndDrop(
    { elementRef: refResizeUpLeft, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        blockSize = {
          width: width - delta.x,
          height: height - delta.y,
        };
        createChangeElementSize(activeCanvasId, activeElementId, blockSize);
        blockPostition = {
          x: x + delta.x,
          y: y + delta.y,
        };
        createChangeElementPosition(
          activeCanvasId,
          activeElementId,
          blockPostition,
        );
      },
    },
  );

  useDragAndDrop(
    { elementRef: refResizeDownLeft, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        blockSize = {
          width: width - delta.x,
          height: height + delta.y,
        };
        createChangeElementSize(activeCanvasId, activeElementId, blockSize);
        blockPostition = {
          x: x + delta.x,
          y: y,
        };
        createChangeElementPosition(
          activeCanvasId,
          activeElementId,
          blockPostition,
        );
      },
    },
  );

  useDragAndDrop(
    { elementRef: refResizeMiddleLeft, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        blockSize = {
          width: width - delta.x,
          height: height,
        };
        createChangeElementSize(activeCanvasId, activeElementId, blockSize);
        blockPostition = {
          x: x + delta.x,
          y: y,
        };
        createChangeElementPosition(
          activeCanvasId,
          activeElementId,
          blockPostition,
        );
      },
    },
  );

  useDragAndDrop(
    { elementRef: refResizeUpRight, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        blockSize = {
          width: width + delta.x,
          height: height - delta.y,
        };
        createChangeElementSize(activeCanvasId, activeElementId, blockSize);
        blockPostition = {
          x: x,
          y: y + delta.y,
        };
        createChangeElementPosition(
          activeCanvasId,
          activeElementId,
          blockPostition,
        );
      },
    },
  );

  useDragAndDrop(
    { elementRef: refMiddleButton, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        blockSize = {
          width: width,
          height: height + delta.y,
        };
        createChangeElementSize(activeCanvasId, activeElementId, blockSize);
        blockPostition = {
          x: x,
          y: y,
        };
        createChangeElementPosition(
          activeCanvasId,
          activeElementId,
          blockPostition,
        );
      },
    },
  );

  useDragAndDrop(
    { elementRef: refResizMiddleRight, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        blockSize = {
          width: width + delta.x,
          height: height,
        };
        createChangeElementSize(activeCanvasId, activeElementId, blockSize);
        blockPostition = {
          x: x,
          y: y,
        };
        createChangeElementPosition(
          activeCanvasId,
          activeElementId,
          blockPostition,
        );
      },
    },
  );

  useDragAndDrop(
    { elementRef: refResizeDownRight, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        blockSize = {
          width: width + delta.x,
          height: height + delta.y,
        };
        createChangeElementSize(activeCanvasId, activeElementId, blockSize);
        blockPostition = {
          x: x,
          y: y,
        };
        createChangeElementPosition(
          activeCanvasId,
          activeElementId,
          blockPostition,
        );
      },
    },
  );

  useDragAndDrop(
    { elementRef: refResizeUpMiddle, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        blockSize = {
          width: width,
          height: height - delta.y,
        };
        createChangeElementSize(activeCanvasId, activeElementId, blockSize);
        blockPostition = {
          x: x,
          y: y + delta.y,
        };
        createChangeElementPosition(
          activeCanvasId,
          activeElementId,
          blockPostition,
        );
      },
    },
  );

  function getTransformStyle(transform: Transform) {
    switch (transform.type) {
      case "rotate":
        return `rotate(${transform.value}deg)`;
      case "scale":
        return `scale(${transform.value})`;
      default:
        return "";
    }
  }

  const activeStyles = {
    width: blockSize.width,
    height: blockSize.height,
    left: blockPostition.x,
    top: blockPostition.y,
    cursor: isDragging ? "grabbing" : "grab",
    background: background?.color,
    transform: transform ? getTransformStyle(transform) : "",
  };

  const resizeMiddleRight = {
    top: `${blockSize.height / 2 - 5}px`,
    left: `${blockSize.width - 5}px`,
    cursor: `col-resize`,
  };

  const resizeUpLeft = {
    top: `-8px`,
    left: `-8px`,
    cursor: `nwse-resize`,
  };

  const resizeUpRight = {
    top: `-8px`,
    left: `${blockSize.width - 5}px`,
    cursor: `nesw-resize`,
  };

  const resizeDownLeft = {
    top: `${blockSize.height - 5}px`,
    left: `-8px`,
    cursor: `nesw-resize`,
  };

  const resizeDownRight = {
    top: `${blockSize.height - 5}px`,
    left: `${blockSize.width - 5}px`,
    cursor: `nwse-resize`,
  };

  const resizeUpMiddle = {
    top: `-8px`,
    left: `${blockSize.width / 2 - 5}px`,
    cursor: `row-resize`,
  };

  const resizeDownMiddle = {
    top: `${blockSize.height - 5}px`,
    left: `${blockSize.width / 2 - 5}px`,
    cursor: `row-resize`,
  };

  const resizeMiddleLeft = {
    top: `${blockSize.height / 2 - 5}px`,
    left: `-8px`,
    cursor: `col-resize`,
  };

  return (
    <div className={classNames} style={activeStyles} ref={ref}>
      {isSelected && (
        <div
          className={active.resize}
          style={resizeUpLeft}
          ref={refResizeUpLeft}
        ></div>
      )}
      {isSelected && (
        <div
          className={active.resize}
          style={resizeUpMiddle}
          ref={refResizeUpMiddle}
        ></div>
      )}
      {isSelected && (
        <div
          className={active.resize}
          style={resizeUpRight}
          ref={refResizeUpRight}
        ></div>
      )}
      {isSelected && (
        <div
          className={active.resize}
          style={resizeMiddleRight}
          ref={refResizMiddleRight}
        ></div>
      )}
      {children}
      {isSelected && (
        <div
          className={active.resize}
          style={resizeMiddleLeft}
          ref={refResizeMiddleLeft}
        ></div>
      )}
      {isSelected && (
        <div
          className={active.resize}
          style={resizeDownLeft}
          ref={refResizeDownLeft}
        ></div>
      )}
      {isSelected && (
        <div
          className={active.resize}
          style={resizeDownMiddle}
          ref={refMiddleButton}
        ></div>
      )}
      {isSelected && (
        <div
          className={active.resize}
          style={resizeDownRight}
          ref={refResizeDownRight}
        ></div>
      )}
    </div>
  );
}

export { ActiveObjectView };
