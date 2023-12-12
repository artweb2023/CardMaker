import { ArtObject } from "../../../../../model/types";
import style from "./ArtObjectSettings.module.css";
import { ArtObjectButtonInput } from "./ArtObjectButtonInput";

type ArtObjectDataProps = {
  artObjectData: ArtObject;
};

function ArtObjectSettings({ artObjectData }: ArtObjectDataProps) {
  const { border_color, background } = artObjectData;
  return (
    <div className={style.settings}>
      <ArtObjectButtonInput
        classNameButton={"button"}
        classNameInput={"input"}
        value={border_color}
        text={"Border-color:"}
      />
      <ArtObjectButtonInput
        classNameButton={"button"}
        classNameInput={"input"}
        value={background}
        text={"Background:"}
      />
    </div>
  );
}
export { ArtObjectSettings };
