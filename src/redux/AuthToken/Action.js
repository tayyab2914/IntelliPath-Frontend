// src/redux/actions.js

import {
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  SET_LOGGED_IN,
  RERENDER_TRIBE_PAGE,
  SET_BLIND_MODE,
  SET_USER_ATTRIBUTES,
  RERENDER_APP,
  REFETCH_TRIBE_MEMBERS,
} from "./Types";

export const setAuthToken = (token) => {
  return {
    type: SET_AUTH_TOKEN,
    payload: token,
  };
};
export const refetchTribeMembers = (refetch_tribe_members) => {
  return {
    type: REFETCH_TRIBE_MEMBERS,
    payload: refetch_tribe_members,
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
export const setRerenderApp = (rerender_app) => {
  return {
    type: RERENDER_APP,
    payload: rerender_app,
  };
};

export const setBlindMode = (blind_mode) => {
  return {
    type: SET_BLIND_MODE,
    payload: blind_mode,
  };
};

export const setUserAttributes = (user_attributes) => {
  return {
    type: SET_USER_ATTRIBUTES,
    payload: user_attributes,
  };
};
