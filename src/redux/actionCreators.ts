import { EditorActions } from "./editorActions";
import { Editor } from "../model/types";

function createSaveCanvasAction(updatedCanvas: Editor) {
  return {
    type: EditorActions.SAVE_EDITOR,
    payload: {
      canvas: updatedCanvas,
    },
  };
}

function createAddCanvas(newCanvas: Editor) {
  return {
    type: EditorActions.ADD_CANVAS,
    payload: {
      newCanvas,
    },
  };
}

function createLoadCanvas(loadedCanvases: Editor) {
  return {
    type: EditorActions.LOAD_EDITOR,
    payload: {
      loadedCanvases,
    },
  };
}

function createDeleteCanvas(canvasId: string) {
  return {
    type: EditorActions.DELETE_CANVAS,
    payload: {
      canvasId,
    },
  };
}

export {
  createSaveCanvasAction,
  createAddCanvas,
  createLoadCanvas,
  createDeleteCanvas,
};
