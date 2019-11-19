import axios from "axios";
import { createMessage } from "./messages";

import { GET_TOOLBOX, DELETE_TOOLBOX, ADD_TOOLBOX, GET_ERRORS } from "./types";

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
      dispatch(createMessage({ deleteBox: "Box Deleted" }));
      dispatch({
        type: DELETE_TOOLBOX,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// Add Tool Box
export const addToolbox = toolbox => dispatch => {
  axios
    .post("/api/toolbox/", toolbox)
    .then(res => {
      dispatch(createMessage({ addBox: "Box Added" }));
      dispatch({
        type: ADD_TOOLBOX,
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
