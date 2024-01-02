import { EditorActions, Action } from "./editorActions";
import { Editor, Canvas } from "../model/types";
import { createHistory } from "../model/history";
import { getEditorModel } from "../utils/utils";

const initData: Editor = getEditorModel();

const history = createHistory<Editor>(initData);

const editorReducer = (state: Editor = initData, action: Action) => {
  switch (action.type) {
    case EditorActions.CHANGE_ACATIVE_ELEMENT: {
      const { canvasId, elementId } = action.payload;
      const newActive = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          return {
            ...canvas,
            active: elementId,
          };
        }
        return canvas;
      });
      return {
        ...state,
        canvas: newActive,
      };
    }
    case EditorActions.DELETE_CANVAS_ELEMENT: {
      const { canvasId, elementId } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const newElements = canvas.elements.filter(
            (element) => element.id !== elementId,
          );
          return {
            ...canvas,
            elements: newElements,
          } as Canvas;
        }
        return canvas as Canvas;
      });

      const updatedState = {
        ...state,
        canvas: newState,
      };

      history.addHistoryItem(updatedState);
      return updatedState;
    }
    case EditorActions.ADD_CANVAS_ELEMENT: {
      const { canvasId, elements } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          return {
            ...canvas,
            elements: [...canvas.elements, elements],
          };
        }
        return canvas;
      });

      const updatedState = {
        ...state,
        canvas: newState,
      };

      history.addHistoryItem(updatedState);
      return updatedState;
    }
    case EditorActions.ADD_CANVAS: {
      const { newCanvas } = action.payload;
      return {
        ...state,
        canvas: [...state.canvas, newCanvas],
      };
    }
    case EditorActions.DELETE_CANVAS: {
      const { canvasId } = action.payload;
      const newCanvas = state.canvas.filter((canvas) => canvas.id !== canvasId);
      return {
        ...state,
        canvas: newCanvas,
      };
    }
    case EditorActions.CHANGE_SIZE: {
      const { canvasId, newSize } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          return {
            ...canvas,
            size: newSize,
          };
        }
        return canvas;
      });
      const updatedState = {
        ...state,
        canvas: newState,
      };
      history.addHistoryItem(updatedState);
      return updatedState;
    }
    case EditorActions.CHANGE_BACKGROUND: {
      const { canvasId, newBackground } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId)
          return {
            ...canvas,
            background: newBackground,
          };
        return canvas;
      });
      const updatedState = {
        ...state,
        canvas: newState,
      };
      history.addHistoryItem(updatedState);
      return updatedState;
    }
    case EditorActions.SAVE_EDITOR:
      return {
        ...state,
        canvas: action.payload.canvasArray,
      };
    case EditorActions.EMPTY_MODEL:
      return {
        ...state,
        editor: action.payload.newEditor,
      };
    case EditorActions.LOAD_EDITOR:
      return {
        ...state,
        canvas: action.payload.loadCanvas,
      };
    case EditorActions.SAVE_PHOTO: {
      const { newPhoto } = action.payload;
      return {
        ...state,
        upload: [...state.upload, newPhoto],
      };
    }
    case EditorActions.CHANGE_ACTIVE_CANVAS: {
      return {
        ...state,
        active: action.payload.active,
      };
    }
    default:
      return state;
  }
};

export { editorReducer };
