// src/redux/reducer.js

import { SET_AUTH_TOKEN, REMOVE_AUTH_TOKEN, SET_LOGGED_IN, RERENDER_TRIBE_PAGE, SET_BLIND_MODE, SET_USER_ATTRIBUTES, RERENDER_APP } from "./Types";

const initialState = {
  token: null,
  isLoggedIn: false,
  blind_mode: false,
  user_attributes:{},
  rerender_app:false
};

export default function authReducer(state = initialState, action) {
  if (action.type == SET_AUTH_TOKEN) {
    return {
      ...state,
      token: action.payload,
    };
  } else if (action.type == REMOVE_AUTH_TOKEN) {
    return {
      ...state,
      token: null,
    };
  } else if (action.type == SET_LOGGED_IN) {
    return {
      ...state,
      isLoggedIn: action.payload,
    };
  } else if (action.type == RERENDER_TRIBE_PAGE) {
    return {
      ...state,
      rerender_tribe_page: action.payload,
    }
  }else if (action.type == SET_BLIND_MODE) {
    return {
      ...state,
      blindMode: action.payload,
    };
  }else if (action.type == SET_USER_ATTRIBUTES) {
    return {
      ...state,
      user_attributes: action.payload,
    };
  }
  else if (action.type == RERENDER_APP) {
    return {
      ...state,
      rerender_app: action.payload,
    };
  }else {
    return state;
  }
}
