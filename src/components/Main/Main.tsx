import React from "react";
import { Toolbar } from "./ToolBar/ToolBar";
import { CanvasView } from "./Canvas/CanvasView";
import styles from "./Main.module.css";
import { Canvas } from "../../model/types";

type CanvasDataProps = {
  canvasInfo: Canvas[];
};

function Main({ canvasInfo }: CanvasDataProps) {
  return (
    <div className={styles.editor}>
      <Toolbar />
      {canvasInfo.map((canvasData, index) => (
        <CanvasView key={index} canvasData={canvasData} />
      ))}
    </div>
  );
}

export { Main };
