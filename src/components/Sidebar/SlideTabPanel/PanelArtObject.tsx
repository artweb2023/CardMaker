import { ArtChatView } from "../../Main/Canvas/ArtObject/ChatView";
import { ArtFlowerView } from "../../Main/Canvas/ArtObject/FlowerView";
import { ArtHandThumsView } from "../../Main/Canvas/ArtObject/HandThumbs";
import { ArtHouseDoorView } from "../../Main/Canvas/ArtObject/HouseDoor";
import { ArtMoonView } from "../../Main/Canvas/ArtObject/Moon";
import { ArtPolygonView } from "../../Main/Canvas/ArtObject/Polygon";
import { ArtSnowView } from "../../Main/Canvas/ArtObject/Snow";
import { ArtStartView } from "../../Main/Canvas/ArtObject/Start";
import { ArtSuitHeartView } from "../../Main/Canvas/ArtObject/SuitHeart";
import { ArtSunView } from "../../Main/Canvas/ArtObject/Sun";
import { ArtTreeView } from "../../Main/Canvas/ArtObject/Tree";
import { ArtGiftView } from "../../Main/Canvas/ArtObject/GiftView";
import style from "./PanelArtObject.module.css";

function PanelArtObjectView() {
  const color = "#878787";
  const size = {
    width: 45,
    height: 45,
  };
  return (
    <div className={style.panel}>
      <div className={style.element}>
        <ArtChatView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtFlowerView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtHandThumsView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtHouseDoorView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtMoonView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtPolygonView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtSnowView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtStartView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtSuitHeartView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtSunView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtTreeView color={color} size={size} />
      </div>
      <div className={style.element}>
        <ArtGiftView color={color} size={size} />
      </div>
    </div>
  );
}

export { PanelArtObjectView };
