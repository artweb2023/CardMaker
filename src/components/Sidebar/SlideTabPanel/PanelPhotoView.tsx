import styles from "./PanelPhotoView.module.css";
import { Photo } from "../../../model/types";
import { PhotoLoadView } from "./PhotoLoadView";
import { PanelLoadView } from "./PanelLoadView";

type PanelPhotoViewProps = {
  upload: Array<Photo>;
  onClick: (value: Photo) => void;
};

function PanelPhotoView({ upload, onClick }: PanelPhotoViewProps) {
  const handlePhotoClick = (data: Photo) => {
    onClick(data);
  };
  return (
    <div className={styles.panel}>
      <PanelLoadView />
      {upload.length === 0 ? (
        <p className={styles.text}>Фото не загружены</p>
      ) : (
        <>
          <p className={styles.text}>Загруженые фото:</p>
          {upload.map((photo, index) => (
            <div
              className={styles.wrap}
              key={index}
              onClick={() => {
                handlePhotoClick(photo);
              }}
            >
              <PhotoLoadView src={photo.src} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export { PanelPhotoView };
