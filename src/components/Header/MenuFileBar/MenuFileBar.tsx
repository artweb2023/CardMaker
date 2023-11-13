import React from "react";
import { HeaderButton } from "../MenuBarButton/HederButton";
import style from "./MenuFileBar.module.css";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
  saveToFile: () => void;
  loadFromFile: () => void;
  resetModelHandler: () => void;
};

function MenuFileBar({
  isOpen,
  onClose,
  saveToFile,
  loadFromFile,
  resetModelHandler,
}: MenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={style.menu}>
      <HeaderButton
        text={"Открыть"}
        className={"menu_open_button"}
        onClick={() => {
          loadFromFile();
          onClose();
        }}
      />
      <HeaderButton
        text={"Сохранить"}
        className={"menu_open_button"}
        onClick={() => {
          saveToFile();
          onClose;
        }}
      />
      <HeaderButton
        text={"Удалить"}
        className={"menu_open_button"}
        onClick={() => {
          resetModelHandler();
          onClose;
        }}
      />
    </div>
  );
}

export { MenuFileBar };
