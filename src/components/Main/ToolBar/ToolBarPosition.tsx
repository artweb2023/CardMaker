import React from "react";
import styles from "./ToolBarPosition.module.css";
type PositionProps = {
  className: string;
  text: string;
};

function Pos(props: PositionProps) {
  const { className, text } = props;
  return (
    <div className={styles.tool_bar_position}>
      <span className={styles[className]}></span>
      <span className={styles.tool_bar_position__text}>{text}</span>
    </div>
  );
}

export { Pos };
