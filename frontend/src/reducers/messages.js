import { CREATE_MESSAGE } from "../actions/types";

const DEFAULT_STATE = {};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}
