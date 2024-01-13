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
import { getTemplate } from "./getTemplate";
import template1 from "../data/template/2024/2024.json";
import template2 from "../data/template/8/8_March.json";
import template3 from "../data/template/happybithday/HappyBirthdayBlueAir.json";
import template4 from "../data/template/happybithdaycake/HappyBirthdayCake.json";
import template5 from "../data/template/newyear/HappyNewYear.json";

function getEditorModel(): Editor {
  return {
    canvas: [],
    template: [
      getTemplate(JSON.stringify(template1)),
      getTemplate(JSON.stringify(template2)),
      getTemplate(JSON.stringify(template3)),
      getTemplate(JSON.stringify(template4)),
      getTemplate(JSON.stringify(template5)),
    ],
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
    filter: { filter: "" },
    active: "",
  };
}

function getNewTextElement(): TextInfo {
  return {
    id: generateRandomId(),
    type: "text",
    value: "Пример текста",
    fontSize: 16,
    fontFamily: "Times New Roman",
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
    transform: {
      type: "rotate",
      value: 0,
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
    transform: {
      type: "rotate",
      value: 0,
    },
  };
}

function getNewImageElement(data: Photo): Image {
  return {
    id: generateRandomId(),
    type: "image",
    data,
    size: { width: 100, height: 100 },
    position: { x: 310, y: 250 },
    transform: {
      type: "rotate",
      value: 0,
    },
  };
}

export {
  getEditorModel,
  getNewCanvas,
  getNewTextElement,
  getNewArtObjectElement,
  getNewImageElement,
};
