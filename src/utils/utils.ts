import {
  Editor,
  Canvas,
  TextInfo,
  ArtObject,
  ArtObjectValue,
  Photo,
  Image,
} from "../model/types";
import { generateRandomId } from "./generateRandomId";

function getEditorModel(): Editor {
  return {
    canvas: [],
    template: [],
    upload: [],
    active: "",
  };
}

function getNewCanvas(): Canvas {
  return {
    id: generateRandomId(),
    size: {
      width: 800,
      height: 600,
    },
    background: { color: "" },
    elements: [],
    filter: { color: { color: "" } },
    active: "",
  };
}

function getNewTextElement(): TextInfo {
  return {
    id: generateRandomId(),
    type: "text",
    value: "Пример текста",
    fontSize: 16,
    fontFamily: "Arial",
    color: {
      color: "#000000",
    },
    bold: true,
    coursive: false,
    underline: false,
    position: {
      x: 350,
      y: 20,
    },
    size: {
      width: 200,
      height: 50,
    },
  };
}

function getNewArtObjectElement(value: ArtObjectValue): ArtObject {
  return {
    id: generateRandomId(),
    type: "ArtObject",
    value,
    size: { width: 45, height: 45 },
    border_color: { color: "#000000" },
    background: { color: "" },
    position: { x: 380, y: 210 },
  };
}

function getNewImageElement(data: Photo): Image {
  return {
    id: generateRandomId(),
    type: "image",
    data,
    size: { width: 100, height: 100 },
    position: { x: 400, y: 300 },
  };
}

export {
  getEditorModel,
  getNewCanvas,
  getNewTextElement,
  getNewArtObjectElement,
  getNewImageElement,
};
