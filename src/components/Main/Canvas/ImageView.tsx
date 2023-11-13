import React from "react";
import { Image } from "../../../model/types";
import styles from "./Image.module.css";
import active from "./ActiveObject.module.css";

type ImageSourceProps = {
  imageData: Image;
  isSelected: boolean;
};

function ImageView({ imageData, isSelected }: ImageSourceProps) {
  const {
    size: { width, height },
    position: { x, y },
    data,
  } = imageData;

  const classNames = `${active.container} ${
    isSelected ? active.selected : styles.img
  }`;

  const sizeStyles = {
    width: `${width}px`,
    height: `${height}px`,
    top: `${y}px`,
    left: `${x}px`,
  };

  return <img className={classNames} src={data} style={sizeStyles} />;
}

export { ImageView };
