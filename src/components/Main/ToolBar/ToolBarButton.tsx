import React from "react";
import styles from "./ToolBarButton.module.css";

type PositionProps = {
  className: string;
  text: string;
  onClick?: () => void;
};

function ToolButton({ className, text, onClick }: PositionProps) {
  return (
    <button className={styles.tool_bar_button} onClick={onClick}>
      <span className={styles[className]}></span>
      {text}
    </button>
  );
}

export { ToolButton };
