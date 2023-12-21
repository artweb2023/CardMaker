import { EditorActions, Action } from "./editorActions";
import { Editor } from "../model/types";
import { editorData } from "../data/data";

const initData: Editor = editorData;

const editorReducer = (state: Editor = initData, action: Action) => {
  switch (action.type) {
    case EditorActions.SAVE_EDITOR:
      return {
        ...state,
        canvas: action.payload.canvasArray,
      };
    case EditorActions.ADD_CANVAS:
      return {
        ...state,
        canvas: [...state.canvas, action.payload.newCanvas],
      };
    case EditorActions.LOAD_EDITOR:
      return {
        ...state,
        loadCanvas: action.payload.loadCanvas,
      };
    case EditorActions.DELETE_CANVAS:
      return state.canvas.filter((item) => item.id != action.payload.canvasId);
    default:
      return state;
  }
};

export { editorReducer };
