import React from "react";
import style from "./ArtObjectButtonInput.module.css";
import { Color } from "../../../../../model/types";

type ArtObjectInputProps = {
  classNameButton: string;
  classNameInput: string;
  text: string;
  value: Color;
};

function ArtObjectButtonInput({
  classNameButton,
  classNameInput,
  text,
  value: { color },
}: ArtObjectInputProps) {
  return (
    <button className={style[classNameButton]}>
      {text}
      <input
        className={style[classNameInput]}
        type="color"
        defaultValue={color}
      />
    </button>
  );
}

export { ArtObjectButtonInput };
