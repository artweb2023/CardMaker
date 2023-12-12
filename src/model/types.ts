type Position = {
  x: number;
  y: number;
};

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
  size : Size;
};

type Image = {
  id: string;
  type: "image";
  source: "bs64" | "link";
  data: string;
  size: Size;
  position: Position;
};

type ArtObject = {
  id: string;
  type: "ArtObject";
  size : Size;
  border_color: Color;
  background: Color;
  position: Position;
};

type ActiveObjects = Array<string>;

type Filter = {
  color: Color;
};

type CommandHistory = {
  commandType: string;
  timestamp: Date;
};

type CardTemplate = {
  id: string;
  description: string;
  elements: Array<TextInfo | Image | ArtObject>;
  background: Color | Image;
  size: Size;
};

type Canvas = {
  size: Size;
  background: Color | Image;
  elements: Array<TextInfo | Image | ArtObject>;
  filter: Filter;
  active: ActiveObjects;
};

type Editor = {
  canvas: Array<Canvas>;
  template: Array<CardTemplate>;
  history: CommandHistory;
};

export type {
  TextInfo,
  Color,
  Image,
  ArtObject,
  ActiveObjects,
  Filter,
  CommandHistory,
  CardTemplate,
  Canvas,
  Editor,
};
