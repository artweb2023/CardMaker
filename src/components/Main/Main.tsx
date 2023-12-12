import { useState } from "react";
import { Toolbar } from "./ToolBar/ToolBar";
import { CanvasView } from "./Canvas/CanvasView";
import styles from "./Main.module.css";
import { Canvas, TextInfo, Image, ArtObject } from "../../model/types";

type CanvasDataProps = {
  canvasInfo: Canvas[];
};

function Main({ canvasInfo }: CanvasDataProps) {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  const handleElementClick = (elementId: string) => {
    setActiveElement((prevActiveElement) =>
      prevActiveElement === elementId ? null : elementId,
    );
  };
  let elements: Array<TextInfo | Image | ArtObject> = [];

  if (activeElement !== null) {
    const activeCanvas = canvasInfo.find((canvas) =>
      canvas.elements.some((element) => element.id === activeElement),
    );

    if (activeCanvas) {
      elements = activeCanvas.elements;
    }
  }

  return (
    <div className={styles.editor}>
      <Toolbar activeElement={activeElement} elements={elements} />
      {canvasInfo.map((canvasData, index) => (
        <CanvasView
          key={index}
          canvasData={canvasData}
          onElementClick={handleElementClick}
          activeElement={activeElement}
        />
      ))}
    </div>
  );
}

export { Main };
