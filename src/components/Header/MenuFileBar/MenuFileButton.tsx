import React from "react";
import styles from "./MenuFileButton.module.css";

type MenuFileButtonProps = {
  text: string;
  onClick: () => void;
};

function ButtonFileMenu({ text, onClick }: MenuFileButtonProps) {
  return (
    <button className={styles.menu_open_button} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export { ButtonFileMenu };
