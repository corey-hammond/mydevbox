import axios from "axios";

import { GET_TOOLS, DELETE_TOOL, ADD_TOOL } from "./types";

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
      dispatch({
        type: ADD_TOOL,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

