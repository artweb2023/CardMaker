import React from "react";
import styles from "./ToolBarArrow.module.css";
type ArrowProps = {
  className: string;
};

function Arrow(props: ArrowProps) {
  const { className } = props;
  return <span className={styles[className]}></span>;
}

export { Arrow };
