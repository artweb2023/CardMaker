import React, { useState } from "react";
import { TextInfo } from "../../../model/types";
import styles from "./TextView.module.css";
import active from "./ActiveObject.module.css";

type TextDataProps = {
  text: TextInfo;
  isSelected: boolean;
  onClick: () => void;
};

function Text({ text, isSelected, onClick }: TextDataProps) {
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

  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(value);

  const handleButtonClick = () => {
    setIsEditing(!isEditing);
    onClick();
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

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
    <div>
      {isEditing ? (
        <textarea
          className={`${styles.textarea} ${classNames}`}
          style={textStyle}
          value={inputText}
          onChange={handleInputChange}
          placeholder={value}
          onClick={onClick}
        >
          {isSelected && null}
          {inputText}
        </textarea>
      ) : (
        <p className={classNames} style={textStyle} onClick={handleButtonClick}>
          {isSelected && null}
          {inputText}
        </p>
      )}
    </div>
  );
}

export { Text };
