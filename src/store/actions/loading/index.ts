import { LOADING_DATA_START, LOADING_DATA_STOP } from "../types";

export interface ISetLoadingStart {
  type: typeof LOADING_DATA_START;
}
export interface ISetLoadingStop {
  type: typeof LOADING_DATA_STOP;
}

// Set loading to true
export const setLoadingStart: Function = (): ISetLoadingStart => {
  return { type: LOADING_DATA_START };
};

// Set loading to true
export const setLoadingStop: Function = (): ISetLoadingStop => {
  return { type: LOADING_DATA_STOP };
};

// // Set loading to false
// export const setLoadingStop = () => dispatch => {
//   dispatch({ type: LOADING_DATA_STOP });
// };
