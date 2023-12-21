import {  Size, Color, Filter } from "../model/types";

enum CanvasActions {
  CHANGE_SIZE = "CHANGE_SIZE",
  CHANGE_BACKGROUND = "CHANGE_BACKGROUND",
  CHANGE_ORDER = "CHANGE_ORDER",
  ADD_FILTER = "ADD_FILTER",
}

type ChangeSizeAction = {
  type: CanvasActions.CHANGE_SIZE;
  payload: {
    canvasId: string;
    newSize: Size;
  };
};

type ChangeBackgroundAction = {
  type: CanvasActions.CHANGE_BACKGROUND;
  payload: {
    canvasId: string;
    newBackground: Color;
  };
};

type ChangeOrderAction = {
  type: CanvasActions.CHANGE_ORDER;
  payload: {
    from: number;
    to: number;
  };
};

type AddFilterAction = {
  type: CanvasActions.ADD_FILTER;
  payload: Filter;
};

type Action =
  | ChangeSizeAction
  | ChangeBackgroundAction
  | ChangeOrderAction
  | AddFilterAction;

export { CanvasActions, type Action };
