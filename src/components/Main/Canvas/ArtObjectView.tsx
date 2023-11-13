import React from "react";
import { ArtObject } from "../../../model/types";
import styles from "./ArtObject.module.css";
import active from "./ActiveObject.module.css";

type ArtObjectProps = {
  art: ArtObject;
  imgUrl: string;
  isSelected: boolean;
};

function ArtObjectView({ art, imgUrl, isSelected }: ArtObjectProps) {
  const {
    width,
    height,
    position: { x, y },
  } = art;
  const classNames = `${active.container} ${
    isSelected ? active.selected : styles.artobject
  }`;

  const Style = {
    width: `${width}px`,
    height: `${height}px`,
    left: `${x}px`,
    top: `${y}px`,
    backgroundImage: "url(" + imgUrl + ")",
  };
  return <span className={classNames} style={Style}></span>;
}

export { ArtObjectView };
