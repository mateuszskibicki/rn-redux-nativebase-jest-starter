import { LOADING_DATA_START, LOADING_DATA_STOP } from "../actions/types";
import { Action } from "redux";

interface IState {
  loading: boolean;
}

export const initialState: IState = {
  loading: false
};

export default function(state: IState = initialState, action: Action) {
  switch (action.type) {
    case LOADING_DATA_START:
      return {
        ...state,
        loading: true
      };
    case LOADING_DATA_STOP:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
