import React from "react";
import { ArtObject } from "../../../model/types";
import { ArtSunView } from "./ArtObject/Sun";
import styles from "./ArtObject.module.css";
import active from "./ActiveObject.module.css";

type ArtObjectProps = {
  art: ArtObject;
  isSelected: boolean;
  onClick: () => void;
};

function ArtObjectView({ art, isSelected, onClick }: ArtObjectProps) {
  const {
    width,
    height,
    position: { x, y },
  } = art;
  const classNames = `${active.container} ${
    isSelected ? active.selected : styles.artobject
  }`;

  const handleClick = () => {
    onClick();
  };

  const Style = {
    width: `${width}px`,
    height: `${height}px`,
    left: `${x}px`,
    top: `${y}px`,
  };
  return (
    <div className={classNames} style={Style} onClick={handleClick}>
      <ArtSunView />
    </div>
  );
}

export { ArtObjectView };
