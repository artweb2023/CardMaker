import { useRef, useState } from "react";
import { TextInfo } from "../../../model/types";
import styles from "./TextView.module.css";
import { useDragAndDrop } from "../../../hook/useDND";
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
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(position);
  const { isDragging } = useDragAndDrop(
    { elementRef: ref, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        setPos({ x: pos.x + delta.x, y: pos.y + delta.y });
      },
    },
  );

  const containerStyle = {
    cursor: isDragging ? "grab" : "grabbing",
  };
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
      position={pos}
      size={size}
      className={"textarea"}
    >
      <div
        onClick={onClick}
        className={styles.container}
        style={containerStyle}
        ref={ref}
      >
        <textarea
          className={`${styles.textarea}`}
          style={textStyle}
          value={value}
          placeholder={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </ActiveObjectView>
  );
}

export { Text };
