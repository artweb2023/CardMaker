export enum ArtObjectValue {
  Chat,
  Flower,
  Gift,
  Thumbs,
  House,
  Moon,
  Polygon,
  Snow,
  Start,
  Heart,
  Sun,
  Tree,
}

type Position = {
  x: number;
  y: number;
};

type Photo = {
  source: "bs64" | "link";
  src: string;
};

type BackgroundCanvas = Array<Photo>;

type Color = {
  color: string;
};

type Size = {
  width: number;
  height: number;
};

type TextInfo = {
  id: string;
  type: "text";
  value: string;
  fontSize: number;
  fontFamily: string;
  color: Color;
  bold: boolean;
  coursive: boolean;
  underline: boolean;
  position: Position;
  size: Size;
};

type Image = {
  id: string;
  type: "image";
  data: Photo;
  size: Size;
  position: Position;
};

type ArtObject = {
  id: string;
  type: "ArtObject";
  value: ArtObjectValue;
  size: Size;
  border_color: Color;
  background: Color;
  position: Position;
};

type ActiveObjects = string;

type Filter = {
  color: Color;
};

type CardTemplate = {
  id: string;
  description: string;
  elements: Array<TextInfo | Image | ArtObject>;
  background: Color | Photo;
  size: Size;
};

type ActiveCanvas = string;

type Canvas = {
  id: string;
  size: Size;
  background: Color | Photo;
  elements: Array<TextInfo | Image | ArtObject>;
  filter: Filter;
  active: ActiveObjects;
};

type Editor = {
  canvas: Array<Canvas>;
  template: Array<CardTemplate>;
  upload: Array<Photo>;
  active: ActiveCanvas;
};

export type {
  Photo,
  BackgroundCanvas,
  TextInfo,
  Color,
  Size,
  Image,
  ArtObject,
  ActiveObjects,
  Filter,
  CardTemplate,
  Canvas,
  Editor,
  ActiveCanvas,
};
