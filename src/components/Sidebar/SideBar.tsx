import { useState } from "react";
import { SlideTab } from "./SideTab/SideTab";
import { SlidePanelView } from "./SlideTabPanel/SlidePanel";
import { Photo } from "../../model/types";
import styles from "./SideBar.module.css";
import { useSelector } from "react-redux";
import { useAppActions } from "../../redux/hooks";
import { selectEditor } from "../../redux/selectors";
import { getNewTextElement } from "../../utils/utils";
enum OpenPanel {
  None,
  Template,
  Photo,
  ArtObject,
  Background,
}

type SideBarProps = {
  upload: Array<Photo>;
};

function SideBar({ upload }: SideBarProps) {
  const [openPanel, setSlidePanel] = useState(OpenPanel.None);
  const onClose = () => {
    setSlidePanel(OpenPanel.None);
  };

  const editorModel = useSelector(selectEditor);
  const canvasId = editorModel.active;
  const { createAddCanvasElement } = useAppActions();

  const handleTextClick = () => {
    const newTextElement = getNewTextElement();
    createAddCanvasElement(canvasId, newTextElement);
    onClose();
  };
  function toggleMenu(panel: OpenPanel) {
    setSlidePanel((prev) => (prev === panel ? OpenPanel.None : panel));
  }

  return (
    <div className={styles.side}>
      <SlideTab
        className={"slide_bar_icon__template"}
        text={"Шаблоны"}
        onClick={() => toggleMenu(OpenPanel.Template)}
      ></SlideTab>
      <SlideTab
        className={"slide_bar_icon__text"}
        text={"Текст"}
        onClick={handleTextClick}
      ></SlideTab>
      <SlideTab
        className={"slide_bar_icon__photo"}
        text={"Фото"}
        onClick={() => toggleMenu(OpenPanel.Photo)}
      ></SlideTab>
      <SlideTab
        className={"slide_bar_icon__elements"}
        text={"Элемент"}
        onClick={() => toggleMenu(OpenPanel.ArtObject)}
      ></SlideTab>
      <SlideTab
        className={"slide_bar_icon__background"}
        text={"Фон"}
        onClick={() => toggleMenu(OpenPanel.Background)}
      ></SlideTab>
      <SlidePanelView
        isOpen={openPanel != OpenPanel.None}
        onClose={onClose}
        activePanel={openPanel}
        upload={upload}
      ></SlidePanelView>
    </div>
  );
}

export { SideBar };
