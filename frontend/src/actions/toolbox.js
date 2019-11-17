import axios from "axios";

import { GET_TOOLBOX } from "./types";

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
