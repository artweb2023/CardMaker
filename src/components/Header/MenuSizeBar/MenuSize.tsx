import React from "react";
import { HeaderButton } from "../MenuBarButton/HederButton";
import { MenuInput } from "../MenuSizeBar/MenuSizeInput";
import styles from "./MenuSize.module.css";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MenuSize(props: MenuProps) {
  const { isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.menu_size}>
      <div className={styles.menu_input}>
        <MenuInput text={"Ширина"} placehold={"800"} />
        <MenuInput text={"Высота"} placehold={"600"} />
      </div>
      <HeaderButton
        text={"Сохранить"}
        className={"menu_size_save"}
        onClick={onClose}
      />
    </div>
  );
}

export { MenuSize };
