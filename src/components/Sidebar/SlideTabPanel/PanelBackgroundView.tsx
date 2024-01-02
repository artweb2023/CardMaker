import { BackgroundCanvasData } from "../../../data/background";
import styles from "./PanelBackgroundView.module.css";
import { PhotoLoadView } from "./PhotoLoadView";
import { selectEditor } from "../../../redux/selectors";
import { useAppSelector, useAppActions } from "../../../redux/hooks";
import { Photo, Color } from "../../../model/types";
import { PanelLoadView } from "./PanelLoadView";

function PanelBackgroundView() {
  const editorInfo = useAppSelector(selectEditor);
  const currentActiveCanvas = editorInfo.active;
  const activeCanvas = editorInfo.canvas.find(
    (canvas) => canvas.id === currentActiveCanvas,
  );
  const { createChangeBackground } = useAppActions();
  const selectBackgroundPhoto = (src: Photo) => {
    if (activeCanvas) {
      createChangeBackground(activeCanvas.id, src);
    }
  };

  const isBackground = true;

  const selectBackgroundColor = (color: string) => {
    if (activeCanvas) {
      const colorObject: Color = { color };
      createChangeBackground(activeCanvas.id, colorObject);
    }
  };

  return (
    <div className={styles.panel}>
      <PanelLoadView isBackground={isBackground} />
      <p className={styles.text}>Выбрать цвет</p>
      <div className={styles.wrap}>
        <input
          className={styles.input}
          type="color"
          value={
            activeCanvas?.background && "color" in activeCanvas.background
              ? (activeCanvas.background as Color).color
              : "#FFFFFF"
          }
          onChange={(e) => selectBackgroundColor(e.target.value)}
        />
      </div>
      <p className={styles.text}>Выбрать фон</p>
      {BackgroundCanvasData.map((backgroundItem, index) => (
        <div
          className={styles.wrap}
          key={index}
          onClick={() => selectBackgroundPhoto(backgroundItem)}
        >
          <PhotoLoadView src={backgroundItem.src} />
        </div>
      ))}
    </div>
  );
}

export { PanelBackgroundView };
