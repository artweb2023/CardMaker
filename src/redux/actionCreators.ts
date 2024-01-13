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
  Position,
  Filter,
  Transform,
} from "../model/types";

function createLoadTemplate(newCanvas: Canvas) {
  return {
    type: EditorActions.LOAD_TEMPLATE,
    payload: {
      newCanvas,
    },
  };
}

function createChangeTransformElement(
  canvasId: string,
  elementId: string,
  newTransform: Transform,
) {
  return {
    type: EditorActions.CHANGE_TRANSFORM_ELEMENT,
    payload: {
      canvasId,
      elementId,
      newTransform,
    },
  };
}

function createUndoAction() {
  return {
    type: EditorActions.UNDO,
  };
}

function createRedoAction() {
  return {
    type: EditorActions.REDO,
  };
}

function createChangeTextFontFamily(
  canvasId: string,
  elementId: string,
  newFontFamily: string,
) {
  return {
    type: EditorActions.CHANGE_TEXT_FONT_FAMILY,
    payload: {
      canvasId,
      elementId,
      newFontFamily,
    },
  };
}

function createChangeTextUnderline(
  canvasId: string,
  elementId: string,
  newUnderline: boolean,
) {
  return {
    type: EditorActions.CHANGE_TEXT_UNDERLINE,
    payload: {
      canvasId,
      elementId,
      newUnderline,
    },
  };
}

function createChangeTextCoursive(
  canvasId: string,
  elementId: string,
  newCoursive: boolean,
) {
  return {
    type: EditorActions.CHANGE_TEXT_COURSIVE,
    payload: {
      canvasId,
      elementId,
      newCoursive,
    },
  };
}

function createChangeTextBold(
  canvasId: string,
  elementId: string,
  newBold: boolean,
) {
  return {
    type: EditorActions.CHANGE_TEXT_BOLD,
    payload: {
      canvasId,
      elementId,
      newBold,
    },
  };
}

function createChangeTextFontSize(
  canvasId: string,
  elementId: string,
  newFontSize: number,
) {
  return {
    type: EditorActions.CHANGE_TEXT_FONT_SIZE,
    payload: {
      canvasId,
      elementId,
      newFontSize,
    },
  };
}

function createChangeTextColor(
  canvasId: string,
  elementId: string,
  newColor: Color,
) {
  return {
    type: EditorActions.CHANGE_TEXT_COLOR,
    payload: {
      canvasId,
      elementId,
      newColor,
    },
  };
}

function createChangeTextValue(
  canvasId: string,
  elementId: string,
  newValue: string,
) {
  return {
    type: EditorActions.CHANGE_TEXT_VALUE,
    payload: {
      canvasId,
      elementId,
      newValue,
    },
  };
}

function createChangeBackgroundArtObjeckt(
  canvasId: string,
  elementId: string,
  newBackground: Color,
) {
  return {
    type: EditorActions.CHANGE_BACKGROUND_ARTOBJECKT,
    payload: {
      canvasId,
      elementId,
      newBackground,
    },
  };
}

function createChangeBorderArtObjeckt(
  canvasId: string,
  elementId: string,
  newBorder: Color,
) {
  return {
    type: EditorActions.CHANGE_BORDER_ARTOBJECKT,
    payload: {
      canvasId,
      elementId,
      newBorder,
    },
  };
}

function createChangeElementPosition(
  canvasId: string,
  elementId: string,
  newPosition: Position,
) {
  return {
    type: EditorActions.CHANGE_ELEMENT_POSITION,
    payload: {
      canvasId,
      elementId,
      newPosition,
    },
  };
}

function createChangeElementSize(
  canvasId: string,
  elementId: string,
  newSize: Size,
) {
  return {
    type: EditorActions.CHANGE_ELEMENT_SIZE,
    payload: {
      canvasId,
      elementId,
      newSize,
    },
  };
}

function createChangeAcativeElement(canvasId: string, elementId: string) {
  return {
    type: EditorActions.CHANGE_ACTIVE_ELEMENT,
    payload: {
      canvasId,
      elementId,
    },
  };
}

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

function createAddFilter(canvasId: string, newFilter: Filter) {
  return {
    type: EditorActions.ADD_FILTER,
    payload: {
      canvasId,
      newFilter,
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
  createChangeAcativeElement,
  createChangeElementSize,
  createChangeElementPosition,
  createChangeBorderArtObjeckt,
  createChangeBackgroundArtObjeckt,
  createChangeTextValue,
  createChangeTextColor,
  createChangeTextFontSize,
  createChangeTextBold,
  createChangeTextCoursive,
  createChangeTextUnderline,
  createChangeTextFontFamily,
  createUndoAction,
  createRedoAction,
  createChangeTransformElement,
  createLoadTemplate,
};
