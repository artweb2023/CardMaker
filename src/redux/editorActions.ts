import {
  Canvas,
  Editor,
  Position,
  Photo,
  Color,
  Size,
  Filter,
  ActiveCanvas,
  TextInfo,
  ArtObject,
  Image,
  Transform,
} from "../model/types";

enum EditorActions {
  ADD_CANVAS = "ADD_CANVAS",
  ADD_CANVAS_ELEMENT = "ADD_CANVAS_ELEMENT",
  ADD_FILTER = "ADD_FILTER",
  CHANGE_TEXT_FONT_FAMILY = "CHANGE_TEXT_FONT_FAMILY",
  CHANGE_TEXT_UNDERLINE = "CHANGE_TEXT_UNDERLINE",
  CHANGE_TEXT_COURSIVE = "CHANGE_TEXT_COURSIVE",
  CHANGE_TEXT_BOLD = "CHANGE_TEXT_BOLD",
  CHANGE_TEXT_COLOR = "CHANGE_TEXT_COLOR",
  CHANGE_TEXT_VALUE = "CHANGE_TEXT_VALUE",
  CHANGE_TEXT_FONT_SIZE = "CHANGE_TEXT_FONT_SIZE",
  CHANGE_BORDER_ARTOBJECKT = "CHANGE_BORDER_ARTOBJECKT",
  CHANGE_BACKGROUND_ARTOBJECKT = "CHANGE_BACKGROUND_ARTOBJECKT",
  CHANGE_ELEMENT_SIZE = "CHANGE_ELEMENT_SIZE",
  CHANGE_ELEMENT_POSITION = "CHANGE_ELEMENT_POSITION",
  CHANGE_TRANSFORM_ELEMENT = "CHANGE_TRANSFORM_ELEMENT",
  CHANGE_ACTIVE_CANVAS = "CHANGE_ACTIVE_CANVAS",
  CHANGE_ACTIVE_ELEMENT = "CHANGE_ACTIVE_ELEMENT",
  CHANGE_SIZE = "CHANGE_SIZE",
  CHANGE_BACKGROUND = "CHANGE_BACKGROUND",
  CHANGE_ORDER = "CHANGE_ORDER",
  DELETE_CANVAS = "DELETE_CANVAS",
  DELETE_CANVAS_ELEMENT = "DELETE_CANVAS_ELEMENT",
  EMPTY_MODEL = "EMPTY_MODEL",
  LOAD_EDITOR = "LOAD_EDITOR",
  LOAD_TEMPLATE = "LOAD_TEMPLATE",
  SAVE_EDITOR = "SAVE_EDITOR",
  SAVE_PHOTO = "SAVE_PHOTO",
  UNDO = "UNDO",
  REDO = "REDO",
}

type LoadTemplate = {
  type: EditorActions.LOAD_TEMPLATE;
  payload: {
    newCanvas: Canvas;
  };
};

type ChangeTransformElement = {
  type: EditorActions.CHANGE_TRANSFORM_ELEMENT;
  payload: {
    canvasId: string;
    elementId: string;
    newTransform: Transform;
  };
};

type ChangeTextFontFamily = {
  type: EditorActions.CHANGE_TEXT_FONT_FAMILY;
  payload: {
    canvasId: string;
    elementId: string;
    newFontFamily: string;
  };
};

type ChangeTextUnderline = {
  type: EditorActions.CHANGE_TEXT_UNDERLINE;
  payload: {
    canvasId: string;
    elementId: string;
    newUnderline: boolean;
  };
};

type ChangeTextItalic = {
  type: EditorActions.CHANGE_TEXT_COURSIVE;
  payload: {
    canvasId: string;
    elementId: string;
    newCoursive: boolean;
  };
};

type ChangeTextBold = {
  type: EditorActions.CHANGE_TEXT_BOLD;
  payload: {
    canvasId: string;
    elementId: string;
    newBold: boolean;
  };
};

type ChangeTextFontSize = {
  type: EditorActions.CHANGE_TEXT_FONT_SIZE;
  payload: {
    canvasId: string;
    elementId: string;
    newFontSize: number;
  };
};

type ChangeTextColor = {
  type: EditorActions.CHANGE_TEXT_COLOR;
  payload: {
    canvasId: string;
    elementId: string;
    newColor: Color;
  };
};

type ChangeTextValue = {
  type: EditorActions.CHANGE_TEXT_VALUE;
  payload: {
    canvasId: string;
    elementId: string;
    newValue: string;
  };
};

type ChangeBackgroundArtObjeckt = {
  type: EditorActions.CHANGE_BACKGROUND_ARTOBJECKT;
  payload: {
    canvasId: string;
    elementId: string;
    newBackground: Color;
  };
};

type ChangeBorderArtObjeckt = {
  type: EditorActions.CHANGE_BORDER_ARTOBJECKT;
  payload: {
    canvasId: string;
    elementId: string;
    newBorder: Color;
  };
};

type ChangeElementPosition = {
  type: EditorActions.CHANGE_ELEMENT_POSITION;
  payload: {
    canvasId: string;
    elementId: string;
    newPosition: Position;
  };
};

type ChangeElementSize = {
  type: EditorActions.CHANGE_ELEMENT_SIZE;
  payload: {
    canvasId: string;
    elementId: string;
    newSize: Size;
  };
};

type ChangeActiveElement = {
  type: EditorActions.CHANGE_ACTIVE_ELEMENT;
  payload: {
    canvasId: string;
    elementId: string;
  };
};

type DeleteCanvasElement = {
  type: EditorActions.DELETE_CANVAS_ELEMENT;
  payload: {
    canvasId: string;
    elementId: string;
  };
};

type AddCanvasElement = {
  type: EditorActions.ADD_CANVAS_ELEMENT;
  payload: {
    canvasId: string;
    elements: TextInfo | ArtObject | Image;
  };
};

type AddCanvasAction = {
  type: EditorActions.ADD_CANVAS;
  payload: {
    newCanvas: Canvas;
  };
};

type DeleteCanvasAction = {
  type: EditorActions.DELETE_CANVAS;
  payload: {
    canvasId: string;
  };
};

type SaveCanvasAction = {
  type: EditorActions.SAVE_EDITOR;
  payload: {
    canvasArray: Canvas[];
  };
};

type EmptyModelAction = {
  type: EditorActions.EMPTY_MODEL;
  payload: {
    newEditor: Editor;
  };
};

type LoadCanvasAction = {
  type: EditorActions.LOAD_EDITOR;
  payload: {
    loadCanvas: Canvas[];
  };
};

type SavePhotoAction = {
  type: EditorActions.SAVE_PHOTO;
  payload: {
    newPhoto: Photo[];
  };
};

type ChangeActiveCanvasAction = {
  type: EditorActions.CHANGE_ACTIVE_CANVAS;
  payload: {
    active: ActiveCanvas;
  };
};

type ChangeSizeAction = {
  type: EditorActions.CHANGE_SIZE;
  payload: {
    canvasId: string;
    newSize: Size;
  };
};

type ChangeBackgroundAction = {
  type: EditorActions.CHANGE_BACKGROUND;
  payload: {
    canvasId: string;
    newBackground: Color | Photo;
  };
};

type AddFilterAction = {
  type: EditorActions.ADD_FILTER;
  payload: {
    canvasId: string;
    newFilter: Filter;
  };
};

type UndoAction = {
  type: EditorActions.UNDO;
};

type RedoAction = {
  type: EditorActions.REDO;
};

type Action =
  | UndoAction
  | RedoAction
  | AddCanvasAction
  | DeleteCanvasAction
  | SaveCanvasAction
  | EmptyModelAction
  | LoadCanvasAction
  | ChangeActiveCanvasAction
  | ChangeSizeAction
  | ChangeBackgroundAction
  | AddFilterAction
  | AddCanvasElement
  | DeleteCanvasElement
  | ChangeActiveElement
  | ChangeElementSize
  | ChangeElementPosition
  | ChangeBackgroundArtObjeckt
  | ChangeBorderArtObjeckt
  | ChangeTextValue
  | ChangeTextColor
  | ChangeTextFontSize
  | ChangeTextBold
  | ChangeTextItalic
  | ChangeTextUnderline
  | ChangeTextFontFamily
  | ChangeTransformElement
  | LoadTemplate
  | SavePhotoAction;

export { EditorActions, type Action };
