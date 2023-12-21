import { editorReducer } from "./editorReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  editor: editorReducer,
});

export { rootReducer };
