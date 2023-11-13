import React from "react";
import { TextInfo } from "../../../model/types";
import active from "./ActiveObject.module.css";

type TextDataProps = {
  text: TextInfo;
  isSelected: boolean;
};

function Text({ text, isSelected }: TextDataProps) {
  const {
    position: { x, y },
    fontSize,
    fontFamily,
    color: { color },
    bold,
    coursive,
    underline,
    value,
  } = text;

  const classNames = `${active.container} ${isSelected ? active.selected : ""}`;

  const textStyle = {
    left: `${x}px`,
    top: `${y}px`,
    fontSize: `${fontSize}px`,
    fontFamily: fontFamily,
    color: color,
    fontWeight: bold ? "bold" : "normal",
    fontStyle: coursive ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
  };

  return (
    <p className={classNames} style={textStyle}>
      {isSelected && null}
      {value}
    </p>
  );
}

export { Text };
