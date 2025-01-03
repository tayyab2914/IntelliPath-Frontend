// src/redux/actions.js

import { SET_AUTH_TOKEN, REMOVE_AUTH_TOKEN, SET_LOGGED_IN, RERENDER_TRIBE_PAGE } from "./Types";

export const setAuthToken = (token) => {
  return {
    type: SET_AUTH_TOKEN,
    payload: token,
  };
};

export const removeAuthToken = () => {
  return {
    type: REMOVE_AUTH_TOKEN,
  };
};

export const setLoggedIn = (isLoggedIn) => {
  return {
    type: SET_LOGGED_IN,
    payload: isLoggedIn,
  };
};

export const setRerenderTribePage = (rerender_tribe_page) => {
    return {
      type: RERENDER_TRIBE_PAGE,
      payload: rerender_tribe_page,
    };
  };
