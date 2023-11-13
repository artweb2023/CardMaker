import React from "react";
import styles from "./SideTab.module.css";

type SlideTabProps = {
  className: string;
  text: string;
};

function SlideTab({ className, text }: SlideTabProps) {
  return (
    <button className={styles.slide_bar__tab}>
      <span className={styles[className]}></span>
      {text}
    </button>
  );
}

export { SlideTab };
