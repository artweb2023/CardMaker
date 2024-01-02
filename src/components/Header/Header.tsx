import { useState } from "react";
import { HeaderButton } from "./MenuBarButton/HederButton";
import { MenuBarPencil } from "./MenuBarPencil/MenuBarPencil";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { MenuFileBar } from "./MenuFileBar/MenuFileBar";
import { MenuSize } from "./MenuSizeBar/MenuSize";
import { useAppActions } from "../../redux/hooks";
import { selectEditor } from "../../redux/selectors";
import { useSelector } from "react-redux";
import style from "./Header.module.css";

type MenuFileProps = {
  saveToFile: () => void;
  loadFromFile: () => void;
  resetModelHandler: () => void;
};

enum OpenMenu {
  None,
  File,
  Size,
}

function Header({
  saveToFile,
  loadFromFile,
  resetModelHandler,
}: MenuFileProps) {
  const [openMenu, setOpenMenu] = useState(OpenMenu.None);
  const editorModel = useSelector(selectEditor);
  const { createDeleteCanvas } = useAppActions();
  const activeCanvas = editorModel.active;
  const deleteCanvas = () => {
    if (activeCanvas !== null) createDeleteCanvas(activeCanvas);
  };

  const onClose = () => {
    setOpenMenu(OpenMenu.None);
  };

  const toggleMenu = (menu: OpenMenu) => {
    setOpenMenu((prev) => (prev === menu ? OpenMenu.None : menu));
  };

  return (
    <header className={style.head}>
      <HeaderLogo className={"header__logo"} text={"Card Maker"}></HeaderLogo>
      <div className={style.menu_bar}>
        <HeaderButton
          text={"Файл"}
          className={"menu_bar__button"}
          onClick={() => toggleMenu(OpenMenu.File)}
        ></HeaderButton>
        <HeaderButton
          text={"Размер"}
          className={"menu_bar__button"}
          onClick={() => toggleMenu(OpenMenu.Size)}
        ></HeaderButton>
        <HeaderButton
          text={"Удалить Холст"}
          className={"menu_bar__button"}
          onClick={deleteCanvas}
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
        isOpen={openMenu === OpenMenu.File}
        onClose={onClose}
        saveToFile={saveToFile}
        loadFromFile={loadFromFile}
        resetModelHandler={resetModelHandler}
      />
      <MenuSize
        isOpen={openMenu === OpenMenu.Size}
        onClose={onClose}
        activeCanvas={activeCanvas}
      />
    </header>
  );
}

export { Header };
