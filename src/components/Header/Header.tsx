import React, { useState } from "react";
import { HeaderButton } from "./MenuBarButton/HederButton";
import { MenuBarPencil } from "./MenuBarPencil/MenuBarPencil";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { MenuFileBar } from "./MenuFileBar/MenuFileBar";
import { MenuSize } from "./MenuSizeBar/MenuSize";
import style from "./Header.module.css";

type MenuFileProps = {
  saveToFile: () => void;
  loadFromFile: () => void;
  resetModelHandler: () => void;
};

function Header({
  saveToFile,
  loadFromFile,
  resetModelHandler,
}: MenuFileProps) {
  const [isMenuFileOpen, setMenuFileOpen] = useState(false);
  const [menuButtonClicked, setMenuFileButtonClicked] = useState(false);

  const [isMenuSizeOpen, setSizeMenuOpen] = useState(false);
  const [menuButtonSizeClicked, setSizeMenuButtonCliked] = useState(false);

  const FileMenuClick = () => {
    if (menuButtonClicked) {
      setMenuFileOpen(!isMenuFileOpen);
      setSizeMenuOpen(false);
      setMenuFileButtonClicked(false);
    } else {
      setMenuFileButtonClicked(true);
      setSizeMenuButtonCliked(false);
    }
  };

  const SizeMenuClick = () => {
    if (menuButtonSizeClicked) {
      setSizeMenuOpen(!isMenuSizeOpen);
      setMenuFileOpen(false);
      setSizeMenuButtonCliked(false);
    } else {
      setSizeMenuButtonCliked(true);
      setMenuFileButtonClicked(false);
    }
  };

  return (
    <header className={style.head}>
      <HeaderLogo className={"header__logo"} text={"Card Maker"}></HeaderLogo>
      <div className={style.menu_bar}>
        <HeaderButton
          text={"Файл"}
          className={"menu_bar__button"}
          onClick={FileMenuClick}
        ></HeaderButton>
        <HeaderButton
          text={"Размер"}
          className={"menu_bar__button"}
          onClick={SizeMenuClick}
        ></HeaderButton>
        <MenuBarPencil
          className={"menu-bar-pencil"}
          textClass={"menu-bar-pencil__text"}
          text={"Название дизайна"}
          iconClass={"menu-bar-pencil__icon"}
        ></MenuBarPencil>
      </div>
      <HeaderButton
        text={"Скачать"}
        className={"menu_bar_button__dowload"}
      ></HeaderButton>
      <MenuFileBar
        isOpen={isMenuFileOpen}
        onClose={() => setMenuFileButtonClicked(false)}
        saveToFile={saveToFile}
        loadFromFile={loadFromFile}
        resetModelHandler={resetModelHandler}
      />
      <MenuSize
        isOpen={isMenuSizeOpen}
        onClose={() => setSizeMenuButtonCliked(false)}
      />
    </header>
  );
}

export { Header };
