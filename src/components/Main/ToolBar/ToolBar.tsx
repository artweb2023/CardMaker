import React from "react";
import { Arrow } from "./ToolBarArrow";
import { Properties } from "./ToolBarProp";
import { Pos } from "./ToolBarPosition";
import styles from "./ToolBar.module.css";

function Toolbar() {
  return (
    <div className={styles.tool_bar}>
      <Arrow className={"tool_bar__left"}></Arrow>
      <Arrow className={"tool_bar__right"}></Arrow>
      <Properties></Properties>
      <div className={styles.tool_bar_menu}>
        <Pos className={"tool_bar_position__filter"} text={"Фиильтр"}></Pos>
        <Pos className={"tool_bar_position__trash"} text={"Удалить"}></Pos>
      </div>
    </div>
  );
}

export { Toolbar };
