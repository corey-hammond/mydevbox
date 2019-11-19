import { GET_TOOLS, DELETE_TOOL, ADD_TOOL} from "../actions/types.js";

const DEFAULT_STATE = {
  tools: []
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_TOOLS:
      return {
        ...state,
        tools: action.payload
      };
    case DELETE_TOOL:
      return {
        ...state,
        tools: state.tools.filter(tool => tool.id !== action.payload)
      };
    case ADD_TOOL:
      return {
        ...state,
        tools: [...state.tools, action.payload]
      };
    default:
      return state;
  }
}