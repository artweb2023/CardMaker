export type Position = {
  x: number;
  y: number;
};

export type Color = {
  color: string;
};

export type Size = {
  width: number;
  height: number;
};

export type TextInfo = {
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
};

export type Image = {
  id: string;
  type: "image";
  source: "bs64" | "link";
  data: string;
  size: Size;
  position: Position;
};

export type ArtObject = {
  id: string;
  type: "ArtObject";
  width: number;
  height: number;
  border_color: Color;
  background: Color;
  position: Position;
};

export type ActiveObjects = Array<string>;

export type Filter = {
  color: Color;
};

export type CommandHistory = {
  commandType: string;
  timestamp: Date;
};

export type CardTemplate = {
  id: string;
  description: string;
  elements: Array<TextInfo | Image | ArtObject>;
  background: Color | Image;
  size: Size;
};

export type Canvas = {
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

export type { Editor }