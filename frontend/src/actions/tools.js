import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_TOOLS, DELETE_TOOL, ADD_TOOL } from "./types";

// Get tools from db -- NO LINK TO DISPLAY THESE YET
export const getTools = () => (dispatch, getState) => {
  axios
    .get("/api/tools/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TOOLS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete tool
export const deleteTool = id => (dispatch, getState) => {
  axios
    .delete(`/api/tools/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteTool: "Tool Deleted" }));
      dispatch({
        type: DELETE_TOOL,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// Add Tool
export const addTool = tool => (dispatch, getState) => {
  axios
    .post("/api/tools/", tool, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addTool: "Tool Added" }));
      dispatch({
        type: ADD_TOOL,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
