import { Image } from "../../../model/types";
import styles from "./Image.module.css";
import { ActiveObjectView } from "./ActiveObject/ActiveObjectView";

type ImageSourceProps = {
  imageData: Image;
  isSelected: boolean;
  onClick: () => void;
};

function ImageView({ imageData, isSelected, onClick }: ImageSourceProps) {
  const { size, position, data, transform } = imageData;

  return (
    <ActiveObjectView
      isSelected={isSelected}
      position={position}
      size={size}
      className="image"
      transform={transform}
    >
      <img className={styles.image} src={data.src} onClick={onClick} />
    </ActiveObjectView>
  );
}

export { ImageView };
