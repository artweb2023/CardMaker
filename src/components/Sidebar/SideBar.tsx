import { useState } from "react";
import { SlideTab } from "./SideTab/SideTab";
import styles from "./SideBar.module.css";
import { SlidePanelView } from "./SlideTabPanel/SlidePanel";

enum OpenPanel {
  None,
  Template,
  Photo,
  ArtObject,
  Load,
  Background,
}

function SideBar() {
  const [openPanel, setSlidePanel] = useState(OpenPanel.None);

  const onClose = () => {
    setSlidePanel(OpenPanel.None);
  };

  const toggleMenu = (panel: OpenPanel) => {
    setSlidePanel((prev) => (prev === panel ? OpenPanel.None : panel));
  };

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
        onClick={onClose}
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
        className={"slide_bar_icon__dowloads"}
        text={"Загрузить"}
        onClick={() => toggleMenu(OpenPanel.Load)}
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
      ></SlidePanelView>
    </div>
  );
}

export { SideBar };
