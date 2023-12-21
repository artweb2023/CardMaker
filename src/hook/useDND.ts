import { useEffect, useState, RefObject, useRef } from "react";

type DragAndDropOptions = {
  onPositionChange: (position: { x: number; y: number }) => void;
};

function useDragAndDrop(
  {
    elementRef,
    isActive,
  }: { elementRef: RefObject<HTMLDivElement>; isActive: boolean },
  options: DragAndDropOptions,
) {
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const element = elementRef.current;
    const onMouseMove = (e: MouseEvent) => {
      if (elementRef.current && isActive) {
        const delta = {
          x: e.clientX - startPos.current.x,
          y: e.clientY - startPos.current.y,
        };
        options.onPositionChange(delta);
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      setIsDragging(false);
    };

    const onMouseDown = (e: MouseEvent) => {
      if (e.defaultPrevented) {
        return;
      }
      if (elementRef.current) {
        e.preventDefault();
        startPos.current = {
          x: e.clientX,
          y: e.clientY,
        };
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        if (isActive) {
          setIsDragging(true);
        }
      }
    };

    if (element && isActive) {
      element.addEventListener("mousedown", onMouseDown);
    }
    return () => {
      if (element && isActive) {
        element.removeEventListener("mousedown", onMouseDown);
      }
    };
  }, [elementRef, isActive, options]);

  return { isDragging };
}

export { useDragAndDrop };
