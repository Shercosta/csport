import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";


import thunk from "redux-thunk";
import settingsReducer from "./reducers";

const rootReducer = combineReducers({ settingsReducer });

export default createStore(rootReducer, applyMiddleware(thunk));
