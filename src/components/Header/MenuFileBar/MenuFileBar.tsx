import React from "react";
import { ButtonFileMenu } from "./MenuFileButton";
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
  const handleLoadFromFile = () => {
    loadFromFile();
    onClose();
  };

  const handleSaveToFile = () => {
    saveToFile();
    onClose();
  };

  const handleResetModelHandler = () => {
    resetModelHandler();
    onClose();
  };

  return (
    <div className={style.menu}>
      <ButtonFileMenu text={"Открыть"} onClick={handleLoadFromFile} />
      <ButtonFileMenu text={"Сохранить"} onClick={handleSaveToFile} />
      <ButtonFileMenu text={"Удалить"} onClick={handleResetModelHandler} />
    </div>
  );
}

export { MenuFileBar };
