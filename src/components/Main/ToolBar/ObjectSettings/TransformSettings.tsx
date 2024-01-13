import style from "./TransformSettings.module.css";
import { selectEditor } from "../../../../redux/selectors";
import { useAppSelector, useAppActions } from "../../../../redux/hooks";
import { useState } from "react";

function TransformSettingsView() {
  const { createChangeTransformElement } = useAppActions();
  const editorInfo = useAppSelector(selectEditor);
  const canvasId = editorInfo.active;
  const selectedCanvas = editorInfo.canvas.find(
    (canvas) => canvas.id === canvasId,
  );
  const [value, setValue] = useState(0);
  const elementId = selectedCanvas ? selectedCanvas.active : "";
  const handleChangeAddTransformClick = () => {
    createChangeTransformElement(canvasId, elementId, {
      type: "rotate",
      value: value,
    });
    setValue((value) => value + 5);
  };
  const handleChangeSubTransformClick = () => {
    createChangeTransformElement(canvasId, elementId, {
      type: "rotate",
      value: value,
    });
    setValue((value) => value - 5);
  };
  return (
    <div className={style.container}>
      <button
        className={style.arro_left}
        onClick={handleChangeAddTransformClick}
      ></button>
      <button
        className={style.arro_right}
        onClick={handleChangeSubTransformClick}
      ></button>
    </div>
  );
}

export { TransformSettingsView };
