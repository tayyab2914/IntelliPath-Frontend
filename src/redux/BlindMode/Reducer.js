// src/redux/reducer.js

import { SET_BLIND_MODE } from "./Types";

const initialState = {
  blindMode: "false",
};

export default function blindModeReducer(state = initialState, action) {
  if (action.type == SET_BLIND_MODE) {
    return {
      ...state,
      blindMode: action.payload,
    };
  } else {
    return state;
  }
}
