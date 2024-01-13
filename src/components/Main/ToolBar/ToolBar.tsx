import { useState } from "react";
import { ButtonArrow } from "./ToolBarButtonArrow";
import { ObjectSettings } from "./ObjectSettings/ObjectSettings";
import { ToolButton } from "./ToolBarButton";
import { TextInfo, Image, ArtObject } from "../../../model/types";
import { useAppActions } from "../../../redux/hooks";
import { getNewCanvas } from "../../../utils/utils";
import { useSelector } from "react-redux";
import { selectEditor } from "../../../redux/selectors";
import styles from "./ToolBar.module.css";

type ToolbarProps = {
  activeElement: string | null;
  elements: Array<TextInfo | Image | ArtObject>;
};

function Toolbar({ activeElement, elements }: ToolbarProps) {
  const [filterIndex, setFilterIndex] = useState(0);
  const {
    createAddCanvas,
    createRemoveCanvasElement,
    createUndoAction,
    createRedoAction,
    createAddFilter,
  } = useAppActions();
  const handleCreateCanvasClick = () => {
    const newCanvas = getNewCanvas();
    createAddCanvas(newCanvas);
  };
  const safeElements = elements || [];
  const safeActiveElement = activeElement || "";
  const editorModel = useSelector(selectEditor);
  const canvasId = editorModel.active;
  const handleRemoveElementClick = () => {
    if (activeElement) {
      createRemoveCanvasElement(canvasId, activeElement);
    }
  };
  const handleUndoClick = () => {
    createUndoAction();
  };
  const handleRedoClick = () => {
    createRedoAction();
  };
  const filter = [
    "grayscale(100%)",
    "brightness(120%) saturate(120%) hue-rotate(180deg)",
    "sepia(20%) saturate(200%) hue-rotate(-50deg)",
    "",
  ];
  const handleChangeFilterClick = () => {
    createAddFilter(canvasId, { filter: filter[filterIndex] });
    setFilterIndex((prevIndex) => (prevIndex + 1) % filter.length);
  };
  return (
    <div className={styles.tool_bar}>
      <ButtonArrow className={"tool_bar__left"} onClick={handleRedoClick} />
      <ButtonArrow className={"tool_bar__right"} onClick={handleUndoClick} />
      <ObjectSettings
        activeElement={safeActiveElement}
        elements={safeElements}
      />
      <div className={styles.tool_bar_menu}>
        <ToolButton
          className={"tool_bar_button__create"}
          text={"Создать"}
          onClick={handleCreateCanvasClick}
        />
        <ToolButton
          className={"tool_bar_button__filter"}
          text={"Фиильтр"}
          onClick={handleChangeFilterClick}
        />
        <ToolButton
          className={"tool_bar_button__trash"}
          text={"Удалить"}
          onClick={handleRemoveElementClick}
        />
      </div>
    </div>
  );
}

export { Toolbar };
