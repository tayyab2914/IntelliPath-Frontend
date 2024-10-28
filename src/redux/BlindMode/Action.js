// src/redux/actions.js

import {  SET_BLIND_MODE } from "./Types";

export const setBlindMode = (blindMode) => {
  return {
    type: SET_BLIND_MODE,
    payload: blindMode,
  };
};

