import { Toolbar } from "./ToolBar/ToolBar";
import { CanvasView } from "./Canvas/CanvasView";
import styles from "./Main.module.css";
import { TextInfo, Image, ArtObject, Canvas } from "../../model/types";
import { selectEditor } from "../../redux/selectors";
import { useAppSelector, useAppActions } from "../../redux/hooks";
type CanvasDataProps = {
  onSelectCanvas: (canvasId: string) => void;
  selectedCanvasId: string | null;
};

function Main({ onSelectCanvas, selectedCanvasId }: CanvasDataProps) {
  const { createChangeAcativeElement } = useAppActions();
  const editorInfo = useAppSelector(selectEditor);
  const selectedCanvas = editorInfo.canvas.find(
    (canvas) => canvas.id === selectedCanvasId,
  );
  const activeElementId = selectedCanvas?.active || null;
  if (!editorInfo.canvas) {
    return null;
  }

  const handleSelectElementClick = (elementId: string) => {
    if (selectedCanvasId)
      createChangeAcativeElement(selectedCanvasId, elementId);
  };

  let elements: Array<TextInfo | Image | ArtObject> = [];

  if (activeElementId) {
    const activeCanvas = editorInfo.canvas.find((canvas: Canvas) =>
      canvas.elements.some((element) => element.id === activeElementId),
    );

    if (activeCanvas) {
      elements = activeCanvas.elements;
    }
  }

  return (
    <div className={styles.editor}>
      <Toolbar activeElement={activeElementId} elements={elements} />
      {editorInfo.canvas.map((canvasData, index) => (
        <CanvasView
          key={index}
          canvasData={canvasData}
          onElementClick={handleSelectElementClick}
          activeElement={activeElementId}
          isSelected={selectedCanvasId === canvasData.id}
          onSelectCanvas={() => onSelectCanvas(canvasData.id)}
        />
      ))}
    </div>
  );
}

export { Main };
