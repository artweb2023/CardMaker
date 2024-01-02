import { EditorActions } from "./editorActions";
import {
  Editor,
  Canvas,
  Photo,
  Color,
  Size,
  Image,
  ArtObject,
  TextInfo,
} from "../model/types";

function createRemoveCanvasElement(canvasId: string, elementId: string) {
  return {
    type: EditorActions.DELETE_CANVAS_ELEMENT,
    payload: {
      canvasId,
      elementId,
    },
  };
}

function createAddCanvasElement(
  canvasId: string,
  elements: Image | ArtObject | TextInfo,
) {
  return {
    type: EditorActions.ADD_CANVAS_ELEMENT,
    payload: {
      canvasId,
      elements,
    },
  };
}

function createSaveCanvasAction(updatedCanvas: Editor) {
  return {
    type: EditorActions.SAVE_EDITOR,
    payload: {
      canvasArray: updatedCanvas.canvas,
    },
  };
}

function createChangeActiveCanvasAction(canvasId: string) {
  return {
    type: EditorActions.CHANGE_ACTIVE_CANVAS,
    payload: {
      active: canvasId,
    },
  };
}

function createAddCanvas(newCanvas: Canvas) {
  return {
    type: EditorActions.ADD_CANVAS,
    payload: {
      newCanvas,
    },
  };
}

function createEmptyModel(newEditor: Editor) {
  return {
    type: EditorActions.EMPTY_MODEL,
    payload: {
      newEditor,
    },
  };
}

function createLoadCanvas(loadedCanvases: Editor) {
  return {
    type: EditorActions.LOAD_EDITOR,
    payload: {
      loadCanvas: loadedCanvases.canvas,
    },
  };
}

function createSavePhoto(newPhoto: Photo) {
  return {
    type: EditorActions.SAVE_PHOTO,
    payload: {
      newPhoto,
    },
  };
}

function createAddFilter(filter: Color) {
  return {
    type: EditorActions.ADD_FILTER,
    payload: {
      filter,
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

function createChangeBackground(
  canvasId: string,
  newBackground: Color | Photo,
) {
  return {
    type: EditorActions.CHANGE_BACKGROUND,
    payload: {
      canvasId,
      newBackground,
    },
  };
}

function createChangeSize(canvasId: string, newSize: Size) {
  return {
    type: EditorActions.CHANGE_SIZE,
    payload: {
      canvasId,
      newSize,
    },
  };
}

export {
  createSaveCanvasAction,
  createAddCanvas,
  createEmptyModel,
  createLoadCanvas,
  createDeleteCanvas,
  createSavePhoto,
  createAddFilter,
  createChangeBackground,
  createChangeSize,
  createChangeActiveCanvasAction,
  createAddCanvasElement,
  createRemoveCanvasElement,
};
