import styles from "./SlidePanel.module.css";
import { PanelArtObjectView } from "../SlideTabPanel/PanelArtObject";
import { PanelBackgroundView } from "./PanelBackgroundView";
import { PanelPhotoView } from "./PanelPhotoView";
import { Photo, ArtObjectValue } from "../../../model/types";
import { useSelector } from "react-redux";
import { selectEditor } from "../../../redux/selectors";
import { useAppActions } from "../../../redux/hooks";
import {
  getNewArtObjectElement,
  getNewImageElement,
} from "../../../utils/utils";

type SlidePanelViewProps = {
  onClose: () => void;
  isOpen: boolean;
  activePanel: number;
  upload: Array<Photo>;
};

function SlidePanelView({
  isOpen,
  onClose,
  activePanel,
  upload,
}: SlidePanelViewProps) {
  const editorModel = useSelector(selectEditor);
  const canvasId = editorModel.active;
  const { createAddCanvasElement } = useAppActions();

  const handlePhotoClick = (data: Photo) => {
    const newPhotoElement = getNewImageElement(data);
    createAddCanvasElement(canvasId, newPhotoElement);
  };

  const handleArtObjectClick = (value: ArtObjectValue) => {
    const newArtObjectElement = getNewArtObjectElement(value);
    createAddCanvasElement(canvasId, newArtObjectElement);
    onClose();
  };

  let panelContent;
  switch (activePanel) {
    case 0:
      panelContent = null;
      break;
    case 2:
      panelContent = (
        <PanelPhotoView
          upload={upload}
          onClick={(data) => handlePhotoClick(data)}
        />
      );
      break;
    case 3:
      panelContent = (
        <PanelArtObjectView onClick={(value) => handleArtObjectClick(value)} />
      );
      break;
    case 4:
      panelContent = <PanelBackgroundView />;
      break;
    default:
      panelContent = null;
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.panel}>
      {panelContent}
      <button className={styles.button_close} onClick={onClose}>
        <span className={styles.button_icon}></span>
      </button>
    </div>
  );
}

export { SlidePanelView };
