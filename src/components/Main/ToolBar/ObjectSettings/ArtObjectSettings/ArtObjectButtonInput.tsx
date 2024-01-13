import style from "./ArtObjectButtonInput.module.css";
import { Color } from "../../../../../model/types";

type ArtObjectInputProps = {
  classNameButton: string;
  classNameInput: string;
  text: string;
  value: Color;
  selectValue: (value: string) => void;
};

function ArtObjectButtonInput({
  classNameButton,
  classNameInput,
  text,
  value: { color },
  selectValue,
}: ArtObjectInputProps) {
  return (
    <button className={style[classNameButton]}>
      {text}
      <input
        className={style[classNameInput]}
        type="color"
        value={color}
        onChange={(e) => selectValue(e.target.value)}
      />
    </button>
  );
}

export { ArtObjectButtonInput };
