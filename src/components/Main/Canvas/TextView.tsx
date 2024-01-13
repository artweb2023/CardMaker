import { TextInfo } from "../../../model/types";
import styles from "./TextView.module.css";
import { ActiveObjectView } from "./ActiveObject/ActiveObjectView";
import { selectEditor } from "../../../redux/selectors";
import { useAppSelector, useAppActions } from "../../../redux/hooks";
type TextDataProps = {
  text: TextInfo;
  isSelected: boolean;
  onClick: () => void;
};

function Text({ text, isSelected, onClick }: TextDataProps) {
  const { createChangeTextValue } = useAppActions();
  const editorInfo = useAppSelector(selectEditor);
  const canvasId = editorInfo.active;
  const selectedCanvas = editorInfo.canvas.find(
    (canvas) => canvas.id === canvasId,
  );
  const elementId = selectedCanvas ? selectedCanvas.active : "";
  const {
    position,
    value,
    fontSize,
    fontFamily,
    color: { color },
    bold,
    coursive,
    underline,
    size,
    transform,
  } = text;

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
      transform={transform}
    >
      <textarea
        className={`${styles.textarea}`}
        style={textStyle}
        value={value}
        placeholder={value}
        onClick={onClick}
        onChange={(e) => {
          createChangeTextValue(canvasId, elementId, e.target.value);
        }}
      />
    </ActiveObjectView>
  );
}

export { Text };
