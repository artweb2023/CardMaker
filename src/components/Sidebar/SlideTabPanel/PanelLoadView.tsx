import styles from "./PanelLoadView.module.css";
import { useAppSelector, useAppActions } from "../../../redux/hooks";
import { savePhoto } from "../../../utils/getNewPhoto";
import { selectEditor } from "../../../redux/selectors";
import { useRef } from "react";
type PanelLoadViewProps = {
  isBackground?: boolean;
};

function PanelLoadView({ isBackground }: PanelLoadViewProps) {
  const { createSavePhoto, createChangeBackground } = useAppActions();
  const editorInfo = useAppSelector(selectEditor);
  const activeCanvas = editorInfo.canvas.find((canvas) => canvas.id);

  const isUploadClickedRef = useRef(false);
  const handleUploadClick = () => {
    isUploadClickedRef.current = true;
  };
  const handleUrlBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const src = event.target.value;
    const source = "link";
    const newPhoto = savePhoto(src, source);
    if (isBackground) {
      if (activeCanvas && isUploadClickedRef) {
        createChangeBackground(activeCanvas.id, newPhoto);
      }
    } else {
      createSavePhoto(newPhoto);
    }
  };

  const readFileAsBase64 = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const source = "bs64";
      reader.onload = () => {
        const base64 = reader.result as string;
        const newPhoto = savePhoto(base64, source);
        if (isBackground) {
          if (activeCanvas) {
            createChangeBackground(activeCanvas.id, newPhoto);
          }
        } else {
          createSavePhoto(newPhoto);
        }
        resolve();
      };
      reader.onerror = (error) => {
        alert.prototype("Error reading file:", error);
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      await readFileAsBase64(file);
    }
  };

  return (
    <div className={styles.content}>
      <label className={styles.text}>URL:</label>
      <input className={styles.input} type="text" onBlur={handleUrlBlur} />
      <button className={styles.button} onClick={handleUploadClick}>
        Загрузить
      </button>
      <p className={styles.text}>File:</p>
      <label>
        <input
          type="file"
          name="image"
          accept=".jpg, .jpeg, .png, .gif"
          onChange={handleFileChange}
          hidden
        />
        <span className={styles.span_button}>Загрузить</span>
      </label>
    </div>
  );
}

export { PanelLoadView };
