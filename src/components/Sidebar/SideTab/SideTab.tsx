import React from "react";
import styles from "./SideTab.module.css";

type SlideTabProps = {
  className: string;
  text: string;
  onClick?: () => void;
};

function SlideTab({ className, text, onClick }: SlideTabProps) {
  return (
    <button className={styles.slide_bar__tab} onClick={onClick}>
      <span className={styles[className]}></span>
      {text}
    </button>
  );
}

export { SlideTab };
