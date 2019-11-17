import axios from "axios";

import { GET_TOOLS, DELETE_TOOL } from "./types";

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

// Delete tools
export const deleteTools = id => dispatch => {
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
