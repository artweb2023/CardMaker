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
import styles from "./Canvas.module.css";

type CanvasDataProps = {
  canvasData: Canvas;
  onElementClick: (elementId: string) => void;
  activeElement: string | null;
};

function CanvasView({
  canvasData,
  onElementClick,
  activeElement,
}: CanvasDataProps) {
  const {
    elements,
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
        const isBlockSelected = activeElement === element.id;
        const handleClick = () => {
          onElementClick(element.id);
        };
        switch (element.type) {
          case "text": {
            const textElement = element as TextInfo;
            return (
              <Text
                key={index}
                text={textElement}
                isSelected={isBlockSelected}
                onClick={handleClick}
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
                onClick={handleClick}
              />
            );
          }
          case "ArtObject": {
            const artObjectElement = element as ArtObject;
            return (
              <ArtObjectView
                key={index}
                art={artObjectElement}
                isSelected={isBlockSelected}
                onClick={handleClick}
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
