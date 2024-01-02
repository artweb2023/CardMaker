import {
  Canvas,
  Editor,
  Photo,
  Color,
  Size,
  Filter,
  ActiveCanvas,
  TextInfo,
  ArtObject,
  Image,
} from "../model/types";

enum EditorActions {
  ADD_CANVAS = "ADD_CANVAS",
  ADD_CANVAS_ELEMENT = "ADD_CANVAS_ELEMENT",
  DELETE_CANVAS = "DELETE_CANVAS",
  DELETE_CANVAS_ELEMENT = "DELETE_CANVAS_ELEMENT",
  SAVE_EDITOR = "SAVE_EDITOR",
  EMPTY_MODEL = "EMPTY_MODEL",
  LOAD_EDITOR = "LOAD_EDITOR",
  SAVE_PHOTO = "SAVE_PHOTO",
  CHANGE_ACTIVE_CANVAS = "CHANGE_ACTIVE_CANVAS",
  CHANGE_ACATIVE_ELEMENT = "CHANGE_ACATIVE_ELEMENT",
  CHANGE_SIZE = "CHANGE_SIZE",
  CHANGE_BACKGROUND = "CHANGE_BACKGROUND",
  CHANGE_ORDER = "CHANGE_ORDER",
  ADD_FILTER = "ADD_FILTER",
  UNDO = "UNDO",
  REDO = "REDO",
}

type ChangeAcativeElement = {
  type: EditorActions.CHANGE_ACATIVE_ELEMENT;
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
  canvasId: string;
  payload: Filter;
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
  | ChangeAcativeElement
  | SavePhotoAction;

export { EditorActions, type Action };
