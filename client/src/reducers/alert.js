// Alert Reducer this is

import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = []; // The redux-state which will be accessable everywhere

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload]; // Already existing redux-state me paload push kar do...
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload); // Jiska id match kar raha usko filter kar do...
    default:
      return state;
  }
}
