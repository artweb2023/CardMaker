import React, { useState } from "react";
import style from "./MenuBarPencil.module.css";

type MenuBarPencilProps = {
  className: string;
  iconClass: string;
  textClass: string;
  text: string;
};

function MenuBarPencil({
  className,
  iconClass,
  textClass,
  text,
}: MenuBarPencilProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(text);

  const handleButtonClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className={style[className]}>
      {isEditing ? (
        <input
          className={style.menu_bar_pencil_input}
          value={inputText}
          onChange={handleInputChange}
          placeholder={text}
        />
      ) : (
        <p className={style[textClass]}>{inputText}</p>
      )}
      <button className={style[iconClass]} onClick={handleButtonClick}></button>
    </div>
  );
}

export { MenuBarPencil };
