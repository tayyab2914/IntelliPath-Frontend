import { combineReducers } from "redux";
import authReducer from "./AuthToken/Reducer";
import blindModeReducer from "./BlindMode/Reducer";

const rootReducer = combineReducers({
  authToken: authReducer,
  blindMode: blindModeReducer,
});

export default rootReducer;
