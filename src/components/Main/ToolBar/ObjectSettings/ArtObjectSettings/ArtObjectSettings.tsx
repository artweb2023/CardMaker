import { ArtObject } from "../../../../../model/types";
import style from "./ArtObjectSettings.module.css";
import { ArtObjectButtonInput } from "./ArtObjectButtonInput";
import { selectEditor } from "../../../../../redux/selectors";
import { useAppSelector, useAppActions } from "../../../../../redux/hooks";
import { TransformSettingsView } from "../TransformSettings";

type ArtObjectDataProps = {
  artObjectData: ArtObject;
};

function ArtObjectSettings({ artObjectData }: ArtObjectDataProps) {
  const { border_color, background } = artObjectData;
  const { createChangeBackgroundArtObjeckt, createChangeBorderArtObjeckt } =
    useAppActions();
  const editorInfo = useAppSelector(selectEditor);
  const canvasId = editorInfo.active;
  const selectedCanvas = editorInfo.canvas.find(
    (canvas) => canvas.id === canvasId,
  );
  const elementId = selectedCanvas ? selectedCanvas.active : "";
  return (
    <div className={style.settings}>
      <ArtObjectButtonInput
        classNameButton={"button"}
        classNameInput={"input"}
        value={border_color}
        text={"Border-color:"}
        selectValue={(value) =>
          createChangeBorderArtObjeckt(canvasId, elementId, { color: value })
        }
      />
      <ArtObjectButtonInput
        classNameButton={"button"}
        classNameInput={"input"}
        value={background}
        text={"Background:"}
        selectValue={(value) =>
          createChangeBackgroundArtObjeckt(canvasId, elementId, {
            color: value,
          })
        }
      />
      <TransformSettingsView />
    </div>
  );
}
export { ArtObjectSettings };
