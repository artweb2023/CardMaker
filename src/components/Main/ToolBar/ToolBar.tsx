import React from "react";
import { ButtonArrow } from "./ToolBarButtonArrow";
import { ObjectSettings } from "./ObjectSettings/ObjectSettings";
import { ToolButton } from "./ToolBarButton";
import { TextInfo, Image, ArtObject } from "../../../model/types";
import styles from "./ToolBar.module.css";

type ToolbarProps = {
  activeElement: string | null;
  elements: Array<TextInfo | Image | ArtObject>;
};

function Toolbar({ activeElement, elements }: ToolbarProps) {
  const safeElements = elements || [];
  const safeActiveElement = activeElement || "";
  return (
    <div className={styles.tool_bar}>
      <ButtonArrow className={"tool_bar__left"} />
      <ButtonArrow className={"tool_bar__right"} />
      <ObjectSettings
        activeElement={safeActiveElement}
        elements={safeElements}
      />
      <div className={styles.tool_bar_menu}>
        <ToolButton className={"tool_bar_button__create"} text={"Создать"} />
        <ToolButton className={"tool_bar_button__filter"} text={"Фиильтр"} />
        <ToolButton className={"tool_bar_button__trash"} text={"Удалить"} />
      </div>
    </div>
  );
}

export { Toolbar };
