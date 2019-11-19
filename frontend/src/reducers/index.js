import { combineReducers } from "redux";
import toolbox from "./toolbox";
import tools from "./tools";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  toolbox,
  tools,
  errors,
  messages,
  auth
});
