import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const DEFAULT_STATE = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  DEFAULT_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
