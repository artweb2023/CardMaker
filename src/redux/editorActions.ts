import { Canvas } from "../model/types";

enum EditorActions {
  SAVE_EDITOR = "SAVE_EDITOR",
  ADD_CANVAS = "ADD_CANVAS",
  LOAD_EDITOR = "LOAD_EDITOR",
  DELETE_CANVAS = "DELETE_CANVAS",
}

type SaveCanvasAction = {
  type: EditorActions.SAVE_EDITOR;
  payload: {
    canvasArray: Canvas[];
  };
};

type AddCanvasAction = {
  type: EditorActions.ADD_CANVAS;
  payload: {
    newCanvas: Canvas;
  };
};

type LoadCanvasAction = {
  type: EditorActions.LOAD_EDITOR;
  payload: {
    loadCanvas: Canvas[];
  };
};

type DeleteCanvasAction = {
  type: EditorActions.DELETE_CANVAS;
  payload: {
    canvasId: string;
  };
};

type Action =
  | SaveCanvasAction
  | AddCanvasAction
  | LoadCanvasAction
  | DeleteCanvasAction;

export { EditorActions, type Action };
