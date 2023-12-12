import { useRef, useState } from "react";
import { ArtObject } from "../../../model/types";
import { ArtSunView } from "./ArtObject/Sun";
import { ActiveObjectView } from "./ActiveObject/ActiveObjectView";
import { useDragAndDrop } from "../../../hook/useDND";

type ArtObjectProps = {
  art: ArtObject;
  isSelected: boolean;
  onClick: () => void;
};

function ArtObjectView({ art, isSelected, onClick }: ArtObjectProps) {
  const { size, position } = art;

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
      className="artobject"
    >
      <div onClick={onClick} ref={ref} style={containerStyle}>
        <ArtSunView />
      </div>
    </ActiveObjectView>
  );
}

export { ArtObjectView };
