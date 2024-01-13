import { Text } from "./TextView";
import { ImageView } from "./ImageView";
import { ArtObjectView } from "./ArtObjectView";
import {
  Color,
  ArtObject,
  Photo,
  TextInfo,
  Image,
  Canvas,
} from "../../../model/types";
import styles from "./Canvas.module.css";

type CanvasDataProps = {
  canvasData: Canvas;
  onElementClick: (elementId: string) => void;
  activeElement: string | null;
  isSelected: boolean;
  onSelectCanvas: () => void;
};

function CanvasView({
  canvasData,
  onElementClick,
  activeElement,
  isSelected,
  onSelectCanvas,
}: CanvasDataProps) {
  if (!canvasData) {
    return null;
  }
  const {
    id,
    filter: { filter },
    elements,
    size: { width, height },
    background,
  } = canvasData;
  const canvasStyle = {
    width,
    height,
    filter,
    ...(background instanceof Object && "color" in background
      ? { backgroundColor: (background as Color).color }
      : { backgroundImage: `url(${(background as Photo).src})` }),
    ...(background instanceof Object &&
      !("color" in background) && {
        backgroundSize: "cover",
        backgroundPosition: "center",
      }),
  };
  const classNames = `${styles.canvas} ${
    isSelected ? styles.selected : styles.canvas
  }
  `;

  return (
    <div className={classNames} style={canvasStyle}>
      <div style={canvasStyle} onClick={onSelectCanvas} id={id}>
        {elements.map((element, index) => {
          const isBlockSelected = activeElement === element.id;
          const handleClick = () => {
            onElementClick(element.id);
          };
          switch (element.type) {
            case "text": {
              const textElement = element as TextInfo;
              return (
                <Text
                  key={index}
                  text={textElement}
                  isSelected={isBlockSelected}
                  onClick={handleClick}
                />
              );
            }
            case "image": {
              const imageElement = element as Image;
              return (
                <ImageView
                  key={index}
                  imageData={imageElement}
                  isSelected={isBlockSelected}
                  onClick={handleClick}
                />
              );
            }
            case "ArtObject": {
              const artObjectElement = element as ArtObject;
              return (
                <ArtObjectView
                  key={index}
                  art={artObjectElement}
                  isSelected={isBlockSelected}
                  onClick={handleClick}
                />
              );
            }
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export { CanvasView };
