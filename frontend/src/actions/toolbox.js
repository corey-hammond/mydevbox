import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_TOOLBOX, DELETE_TOOLBOX, ADD_TOOLBOX } from "./types";

// Get toolboxes from db
export const getToolbox = () => (dispatch, getState) => {
  axios
    .get("/api/toolbox/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_TOOLBOX,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete toolbox
export const deleteToolbox = id => (dispatch, getState) => {
  axios
    .delete(`/api/toolbox/${id}/`, tokenConfig(getState))
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
export const addToolbox = toolbox => (dispatch, getState) => {
  axios
    .post("/api/toolbox/", toolbox, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addBox: "Box Added" }));
      dispatch({
        type: ADD_TOOLBOX,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
