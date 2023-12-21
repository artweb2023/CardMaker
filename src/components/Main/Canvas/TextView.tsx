import { useState } from "react";
import { TextInfo } from "../../../model/types";
import styles from "./TextView.module.css";
import { ActiveObjectView } from "./ActiveObject/ActiveObjectView";

type TextDataProps = {
  text: TextInfo;
  isSelected: boolean;
  onClick: () => void;
};

function Text({ text, isSelected, onClick }: TextDataProps) {
  const {
    position,
    fontSize,
    fontFamily,
    color: { color },
    bold,
    coursive,
    underline,
    size,
  } = text;
  const [value, setValue] = useState(text.value);

  const textStyle = {
    fontSize,
    fontFamily,
    color,
    fontWeight: bold ? "bold" : "normal",
    fontStyle: coursive ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
  };

  return (
    <ActiveObjectView
      isSelected={isSelected}
      position={position}
      size={size}
      className={"textarea"}
    >
      <textarea
        className={`${styles.textarea}`}
        style={textStyle}
        value={value}
        placeholder={value}
        onClick={onClick}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </ActiveObjectView>
  );
}

export { Text };
