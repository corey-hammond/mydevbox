import axios from "axios";

import { GET_TOOLBOX, DELETE_TOOLBOX, ADD_TOOLBOX } from "./types";

// Get toolboxes from db
export const getToolbox = () => dispatch => {
  axios
    .get("/api/toolbox/")
    .then(res => {
      dispatch({
        type: GET_TOOLBOX,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Delete toolbox
export const deleteToolbox = id => dispatch => {
  axios
    .delete(`/api/toolbox/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_TOOLBOX,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD Tool Box
export const addToolbox = toolbox => dispatch => {
  axios
    .post("/api/toolbox/", toolbox)
    .then(res => {
      dispatch({
        type: ADD_TOOLBOX,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};