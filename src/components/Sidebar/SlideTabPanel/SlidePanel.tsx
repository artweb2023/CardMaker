import styles from "./SlidePanel.module.css";
import { PanelArtObjectView } from "../SlideTabPanel/PanelArtObject";
import { PanelLoadView } from "./PanelLoadView";
import { PanelBackgroundView } from "./PanelBackgroundView";
import { PanelPhotoView } from "./PanelPhotoView";

type SlidePanelViewProps = {
  onClose: () => void;
  isOpen: boolean;
  activePanel: number;
};

function SlidePanelView({ isOpen, onClose, activePanel }: SlidePanelViewProps) {
  if (!isOpen) {
    return null;
  }
  let panelContent;
  switch (activePanel) {
    case 0:
      panelContent = null;
      break;
    case 2:
      panelContent = <PanelPhotoView />;
      break;
    case 3:
      panelContent = <PanelArtObjectView />;
      break;
    case 4:
      panelContent = <PanelLoadView />;
      break;
    case 5:
      panelContent = <PanelBackgroundView />;
      break;
    default:
      panelContent = null;
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
