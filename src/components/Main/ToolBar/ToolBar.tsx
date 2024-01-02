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
  const { createAddCanvas, createRemoveCanvasElement } = useAppActions();
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
  return (
    <div className={styles.tool_bar}>
      <ButtonArrow className={"tool_bar__left"} />
      <ButtonArrow className={"tool_bar__right"} />
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
        <ToolButton className={"tool_bar_button__filter"} text={"Фиильтр"} />
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
