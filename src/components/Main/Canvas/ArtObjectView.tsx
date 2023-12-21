import { ArtObject } from "../../../model/types";
import { ArtSunView } from "./ArtObject/Sun";
import { ArtChatView } from "./ArtObject/ChatView";
import { ActiveObjectView } from "./ActiveObject/ActiveObjectView";
import { ArtFlowerView } from "./ArtObject/FlowerView";
import { ArtGiftView } from "./ArtObject/GiftView";
import { ArtHandThumsView } from "./ArtObject/HandThumbs";
import { ArtHouseDoorView } from "./ArtObject/HouseDoor";
import { ArtMoonView } from "./ArtObject/Moon";
import { ArtPolygonView } from "./ArtObject/Polygon";
import { ArtSnowView } from "./ArtObject/Snow";
import { ArtStartView } from "./ArtObject/Start";
import { ArtSuitHeartView } from "./ArtObject/SuitHeart";
import { ArtTreeView } from "./ArtObject/Tree";

type ArtObjectProps = {
  art: ArtObject;
  isSelected: boolean;
  onClick: () => void;
};

function ArtObjectView({ art, isSelected, onClick }: ArtObjectProps) {
  const {
    size,
    position,
    value,
    border_color: { color },
    background,
  } = art;

  let ArtObjecContent;
  switch (value) {
    case 0:
      ArtObjecContent = <ArtChatView color={color} size={size} />;
      break;
    case 1:
      ArtObjecContent = <ArtFlowerView color={color} size={size} />;
      break;
    case 2:
      ArtObjecContent = <ArtGiftView color={color} size={size} />;
      break;
    case 3:
      ArtObjecContent = <ArtHandThumsView color={color} size={size} />;
      break;
    case 4:
      ArtObjecContent = <ArtHouseDoorView color={color} size={size} />;
      break;
    case 5:
      ArtObjecContent = <ArtMoonView color={color} size={size} />;
      break;
    case 6:
      ArtObjecContent = <ArtPolygonView color={color} size={size} />;
      break;
    case 7:
      ArtObjecContent = <ArtSnowView color={color} size={size} />;
      break;
    case 8:
      ArtObjecContent = <ArtStartView color={color} size={size} />;
      break;
    case 9:
      ArtObjecContent = <ArtSuitHeartView color={color} size={size} />;
      break;
    case 10:
      ArtObjecContent = <ArtSunView color={color} size={size} />;
      break;
    case 11:
      ArtObjecContent = <ArtTreeView color={color} size={size} />;
      break;
    default:
      ArtObjecContent = null;
  }

  return (
    <ActiveObjectView
      isSelected={isSelected}
      position={position}
      size={size}
      background={background}
      className="artobject"
    >
      <div onClick={onClick}>{ArtObjecContent}</div>
    </ActiveObjectView>
  );
}

export { ArtObjectView };
