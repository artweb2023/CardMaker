import { BackgroundCanvasData } from "../../../data/background";
import styles from "./PanelBackgroundView.module.css";
import { BackgroundImageView } from "./BackgroundImage";

function PanelBackgroundView() {
  return (
    <div className={styles.panel}>
      <p className={styles.text}>Выбрать цвет</p>
      <div className={styles.wrap}>
        <input className={styles.input} type="color" value="#00B5E2" />
      </div>
      <p className={styles.text}>Выбрать фон</p>
      {BackgroundCanvasData.map((background, index) => (
        <div className={styles.wrap} key={index}>
          <BackgroundImageView src={background.src} />
        </div>
      ))}
    </div>
  );
}

export { PanelBackgroundView };
