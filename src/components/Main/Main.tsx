import { useState } from "react";
import { Toolbar } from "./ToolBar/ToolBar";
import { CanvasView } from "./Canvas/CanvasView";
import styles from "./Main.module.css";
import { TextInfo, Image, ArtObject, Canvas } from "../../model/types";
import { selectEditor } from "../../redux/selectors";
import { useAppSelector } from "../../redux/hooks";

type CanvasDataProps = {
  onSelectCanvas: (canvasId: string) => void;
  selectedCanvasId: string | null;
};

function Main({ onSelectCanvas, selectedCanvasId }: CanvasDataProps) {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const editorInfo = useAppSelector(selectEditor);
  if (!editorInfo.canvas) {
    return null;
  }

  const handleElementClick = (elementId: string) => {
    setActiveElement((prevActiveElement) =>
      prevActiveElement === elementId ? null : elementId,
    );
  };

  let elements: Array<TextInfo | Image | ArtObject> = [];

  if (activeElement) {
    const activeCanvas = editorInfo.canvas.find((canvas: Canvas) =>
      canvas.elements.some((element) => element.id === activeElement),
    );

    if (activeCanvas) {
      elements = activeCanvas.elements;
    }
  }

  return (
    <div className={styles.editor}>
      <Toolbar activeElement={activeElement} elements={elements} />
      {editorInfo.canvas.map((canvasData, index) => (
        <CanvasView
          key={index}
          canvasData={canvasData}
          onElementClick={handleElementClick}
          activeElement={activeElement}
          isSelected={selectedCanvasId === canvasData.id}
          onSelectCanvas={() => onSelectCanvas(canvasData.id)}
        />
      ))}
    </div>
  );
}

export { Main };
