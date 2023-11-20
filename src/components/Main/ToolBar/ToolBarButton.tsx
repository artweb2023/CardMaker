import React from "react";
import styles from "./ToolBarButton.module.css";

type PositionProps = {
  className: string;
  text: string;
};

function ToolButton({ className, text }: PositionProps) {
  return (
    <button className={styles.tool_bar_button}>
      <span className={styles[className]}></span>
      {text}
    </button>
  );
}

export { ToolButton };
