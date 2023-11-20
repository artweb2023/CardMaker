import React from "react";
import style from "./TextSettingButton.module.css";

type TextSettingButtonProps = {
  classNameButton: string;
  classNameSpan: string;
  text?: string;
};

function TextSettingButton({
  classNameButton,
  classNameSpan,
  text,
}: TextSettingButtonProps) {
  return (
    <button className={style[classNameButton]}>
      {text}
      <span className={style[classNameSpan]}></span>
    </button>
  );
}

export { TextSettingButton };
