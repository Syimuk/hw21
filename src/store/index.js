import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { GUN_ACTION_TYPES } from "../constants";

const initialState = {
  isLoading: false,
  error: false,
  guns: [],
  gun: {},
};

const gunReducer = (state = initialState, action) => {
  if (action.type === GUN_ACTION_TYPES.IS_PENDING) {
    return { ...state, isLoading: action.payload };
  }
  if (action.type === GUN_ACTION_TYPES.ERROR) {
    return { ...state, error: action.payload };
  }
  if (action.type === GUN_ACTION_TYPES.GET_GUN) {
    return { ...state, error: null, isLoading: false, guns: action.payload };
  }
  if (action.type === GUN_ACTION_TYPES.GET_BY_ID) {
    return { ...state, isLoading: false, error: null, gun: action.payload };
  }
  return state;
};
export const store = createStore(gunReducer, applyMiddleware(thunk));
