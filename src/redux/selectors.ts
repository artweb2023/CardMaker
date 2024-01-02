import { RootState } from "./reducer";
import { Editor } from "../model/types";

export const selectEditor = (state: RootState) => state.editor as Editor;
