import axios from "axios";
import { createMessage } from "./messages";

import { GET_TOOLS, DELETE_TOOL, ADD_TOOL, GET_ERRORS } from "./types";

// Get tools from db -- NO LINK TO DISPLAY THESE YET
export const getTools = () => dispatch => {
  axios
    .get("/api/tools/")
    .then(res => {
      dispatch({
        type: GET_TOOLS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Delete tool
export const deleteTool = id => dispatch => {
  axios
    .delete(`/api/tools/${id}/`)
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
export const addTool = tool => dispatch => {
  axios
    .post("/api/tools/", tool)
    .then(res => {
      dispatch(createMessage({ addTool: "Tool Added" }));
      dispatch({
        type: ADD_TOOL,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
