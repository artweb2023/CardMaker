import React from "react";
import { Text } from "./TextView";
import { ImageView } from "./ImageView";
import { ArtObjectView } from "./ArtObjectView";
import {
  Color,
  ArtObject,
  TextInfo,
  Image,
  Canvas,
} from "../../../model/types";
import sun from "./ArtObject/sun.svg";
import styles from "./Canvas.module.css";

type CanvasDataProps = {
  canvasData: Canvas;
};

function CanvasView({ canvasData }: CanvasDataProps) {
  const {
    elements,
    active: activeBlocks,
    size: { width, height },
    background,
  } = canvasData;

  const canvasStyle = {
    width: `${width}px`,
    height: `${height}px`,
    background:
      background instanceof Object && "color" in background
        ? (background as Color).color
        : `url(${background.data})`,
  };
  return (
    <div className={styles.canvas} style={canvasStyle}>
      {elements.map((element, index) => {
        const isBlockSelected = activeBlocks.includes(element.id);
        switch (element.type) {
          case "text": {
            const textElement = element as TextInfo;
            return (
              <Text
                key={index}
                text={textElement}
                isSelected={isBlockSelected}
              />
            );
          }
          case "image": {
            const imageElement = element as Image;
            return (
              <ImageView
                key={index}
                imageData={imageElement}
                isSelected={isBlockSelected}
              />
            );
          }
          case "ArtObject": {
            const artObjectElement = element as ArtObject;
            return (
              <ArtObjectView
                key={index}
                art={artObjectElement}
                imgUrl={sun}
                isSelected={isBlockSelected}
              />
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}

export { CanvasView };
