import React from "react";
import styles from "./ObjectSettings.module.css";
import { TextSettings } from "./TextSettings/TextSettings";
import { ArtObjectSettings } from "./ArtObjectSettings/ArtObjectSettings";
import { TextInfo, Image, ArtObject } from "../../../../model/types";

type ObjectSettingsProps = {
  activeElement: string;
  elements: Array<TextInfo | Image | ArtObject>;
};

function ObjectSettings({ activeElement, elements }: ObjectSettingsProps) {
  const selectedElement = elements.find(
    (element) => element.id === activeElement,
  );

  let elementSettings;

  switch (selectedElement?.type) {
    case "text":
      elementSettings = <TextSettings textData={selectedElement as TextInfo} />;
      break;
    case "ArtObject":
      elementSettings = (
        <ArtObjectSettings artObjectData={selectedElement as ArtObject} />
      );
      break;
    default:
      elementSettings = null;
  }

  return <div className={styles.tool_bar_settings}>{elementSettings}</div>;
}

export { ObjectSettings };
