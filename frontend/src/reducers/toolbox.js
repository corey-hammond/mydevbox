import { GET_TOOLBOX, DELETE_TOOLBOX, ADD_TOOLBOX } from "../actions/types.js";

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
    case DELETE_TOOLBOX:
      return {
        ...state,
        toolbox: state.toolbox.filter(box => box.id !== action.payload)
      };
    case ADD_TOOLBOX:
      return {
        ...state,
        toolbox: [...state.toolbox, action.payload]
      };
    default:
      return state;
  }
}
