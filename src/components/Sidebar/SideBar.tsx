import React from "react";
import { SlideTab } from "./SideTab/SideTab";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.side}>
      <SlideTab
        className={"slide_bar_icon__template"}
        text={"Шаблоны"}
      ></SlideTab>
      <SlideTab className={"slide_bar_icon__text"} text={"Текст"}></SlideTab>
      <SlideTab className={"slide_bar_icon__photo"} text={"Фото"}></SlideTab>
      <SlideTab
        className={"slide_bar_icon__elements"}
        text={"Элемент"}
      ></SlideTab>
      <SlideTab
        className={"slide_bar_icon__dowloads"}
        text={"Загрузить"}
      ></SlideTab>
      <SlideTab
        className={"slide_bar_icon__background"}
        text={"Фон"}
      ></SlideTab>
    </div>
  );
}

export { SideBar };
