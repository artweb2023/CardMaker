import React from "react";
import style from "./HeaderButton.module.css";

type ButtonProps = {
  text: string;
  className: string;
  onClick?: () => void;
};

function HeaderButton({ text, className, onClick }: ButtonProps) {
  return (
    <button className={style[className]} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export { HeaderButton };
