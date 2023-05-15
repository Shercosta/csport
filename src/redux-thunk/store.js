import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ipReducer from "./Reducer";

// Middleware Redux Thunk
const middleware = [thunk]

// Store Redux
const store = createStore(ipReducer, applyMiddleware(...middleware));

export default store;