import { useRef, useState } from "react";
import { Image } from "../../../model/types";
import styles from "./Image.module.css";
import { ActiveObjectView } from "./ActiveObject/ActiveObjectView";
import { useDragAndDrop } from "../../../hook/useDND";

type ImageSourceProps = {
  imageData: Image;
  isSelected: boolean;
  onClick: () => void;
};

function ImageView({ imageData, isSelected, onClick }: ImageSourceProps) {
  const { size, position, data } = imageData;

  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(position);
  const { isDragging } = useDragAndDrop(
    { elementRef: ref, isActive: isSelected },
    {
      onPositionChange: (delta) => {
        setPos({ x: pos.x + delta.x, y: pos.y + delta.y });
      },
    },
  );

  const containerStyle = {
    cursor: isDragging ? "grab" : "grabbing",
  };

  return (
    <ActiveObjectView
      isSelected={isSelected}
      position={pos}
      size={size}
      className="image"
    >
      <div className={styles.container} style={containerStyle} ref={ref}>
        <img className={styles.image} src={data} onClick={onClick} />
      </div>
    </ActiveObjectView>
  );
}

export { ImageView };
