import { GET_TOOLBOX } from "../actions/types.js";

const DEFAULT_STATE = {
  toolbox: []
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_TOOLBOX:
      return {
        ...state,
        toolbox: action.payload
      };
    default:
      return state;
  }
}
