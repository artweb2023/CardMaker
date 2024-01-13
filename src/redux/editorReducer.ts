import { EditorActions, Action } from "./editorActions";
import { Editor, Canvas, TextInfo, Image, ArtObject } from "../model/types";
import { createHistory } from "../model/history";
import { getEditorModel } from "../utils/utils";

const initData: Editor = getEditorModel();

const history = createHistory<Editor>(initData);

const editorReducer = (state: Editor = initData, action: Action) => {
  switch (action.type) {
    case EditorActions.LOAD_TEMPLATE: {
      const { newCanvas } = action.payload;
      return {
        ...state,
        canvas: [...state.canvas, newCanvas],
      };
    }
    case EditorActions.CHANGE_TRANSFORM_ELEMENT: {
      const { canvasId, elementId, newTransform } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                transform: newTransform,
              } as TextInfo | Image | ArtObject;
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_TEXT_FONT_FAMILY: {
      const { canvasId, elementId, newFontFamily } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                fontFamily: newFontFamily,
              } as TextInfo;
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_TEXT_UNDERLINE: {
      const { canvasId, elementId, newUnderline } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                underline: newUnderline,
              } as TextInfo;
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_TEXT_COURSIVE: {
      const { canvasId, elementId, newCoursive } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                coursive: newCoursive,
              } as TextInfo;
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_TEXT_BOLD: {
      const { canvasId, elementId, newBold } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                bold: newBold,
              } as TextInfo;
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_TEXT_FONT_SIZE: {
      const { canvasId, elementId, newFontSize } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                fontSize: newFontSize,
              } as TextInfo;
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_TEXT_COLOR: {
      const { canvasId, elementId, newColor } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                color: newColor,
              } as TextInfo;
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_TEXT_VALUE: {
      const { canvasId, elementId, newValue } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                value: newValue,
              } as TextInfo;
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_BORDER_ARTOBJECKT: {
      const { canvasId, elementId, newBorder } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                border_color: newBorder,
              };
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_BACKGROUND_ARTOBJECKT: {
      const { canvasId, elementId, newBackground } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                background: newBackground,
              };
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_ELEMENT_POSITION: {
      const { canvasId, elementId, newPosition } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                position: newPosition,
              };
            }
            return element;
          });
          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.CHANGE_ELEMENT_SIZE: {
      const { canvasId, elementId, newSize } = action.payload;

      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          const updatedElements = canvas.elements.map((element) => {
            if (element.id === elementId) {
              return {
                ...element,
                size: newSize,
              };
            }
            return element;
          });

          return {
            ...canvas,
            elements: updatedElements,
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
    case EditorActions.ADD_FILTER: {
      const { canvasId, newFilter } = action.payload;
      const newState = state.canvas.map((canvas) => {
        if (canvas.id === canvasId) {
          return {
            ...canvas,
            filter: newFilter,
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
    case EditorActions.CHANGE_ACTIVE_ELEMENT: {
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
    case EditorActions.UNDO: {
      const prevState = history.undo();
      if (prevState) {
        return prevState;
      }
      return state;
    }
    case EditorActions.REDO: {
      const nextState = history.redo();
      if (nextState) {
        return nextState;
      }
      return state;
    }
    default:
      return state;
  }
};

export { editorReducer };
