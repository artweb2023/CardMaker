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
import { ArtObjectValue } from "../../../model/types";

type PanelArtObjectViewProps = {
  onClick: (value: ArtObjectValue) => void;
};

function PanelArtObjectView({ onClick }: PanelArtObjectViewProps) {
  const color = "#878787";
  const size = {
    width: 45,
    height: 45,
  };
  const handleArtObjectClick = (value: ArtObjectValue) => {
    onClick(value);
  };
  return (
    <div className={style.panel}>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Chat)}
      >
        <ArtChatView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Flower)}
      >
        <ArtFlowerView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Thumbs)}
      >
        <ArtHandThumsView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.House)}
      >
        <ArtHouseDoorView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Moon)}
      >
        <ArtMoonView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Polygon)}
      >
        <ArtPolygonView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Snow)}
      >
        <ArtSnowView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Start)}
      >
        <ArtStartView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Heart)}
      >
        <ArtSuitHeartView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Sun)}
      >
        <ArtSunView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Tree)}
      >
        <ArtTreeView color={color} size={size} />
      </div>
      <div
        className={style.element}
        onClick={() => handleArtObjectClick(ArtObjectValue.Gift)}
      >
        <ArtGiftView color={color} size={size} />
      </div>
    </div>
  );
}

export { PanelArtObjectView };
