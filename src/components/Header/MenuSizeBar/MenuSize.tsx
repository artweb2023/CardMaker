import { useState } from "react";
import { HeaderButton } from "../MenuBarButton/HederButton";
import { MenuInput } from "../MenuSizeBar/MenuSizeInput";
import { useAppActions } from "../../../redux/hooks";
import styles from "./MenuSize.module.css";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
  activeCanvas: string | null;
};

function MenuSize(props: MenuProps) {
  const { isOpen, onClose, activeCanvas } = props;
  const { createChangeSize } = useAppActions();

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setWidth(event.target.value) : setWidth("800");
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setHeight(event.target.value) : setHeight("600");
  };

  const handleSaveClick = () => {
    const newSize = {
      width: width ? parseInt(width, 10) : 800,
      height: height ? parseInt(height, 10) : 600,
    };
    if (activeCanvas) {
      createChangeSize(activeCanvas, newSize);
    }

    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.menu_size}>
      <div className={styles.menu_input}>
        <MenuInput
          text={"Ширина"}
          placehold={"800"}
          onChange={handleWidthChange}
        />
        <MenuInput
          text={"Высота"}
          placehold={"600"}
          onChange={handleHeightChange}
        />
      </div>
      <HeaderButton
        text={"Сохранить"}
        className={"menu_size_save"}
        onClick={handleSaveClick}
      />
    </div>
  );
}

export { MenuSize };
