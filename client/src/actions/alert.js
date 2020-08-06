import { v4 as uuidv4 } from "uuid";
const { SET_ALERT, REMOVE_ALERT } = require("./types");

// "thunk" is the middleware which allows us to return a function instead of an object
// from a action creator function......

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

// export function setAlert(msg, alertType, timeout=5000){
//   return function(dispatch){
//     const id = uuidv4();
//     dispatch({
//       type: SET_ALERT,
//       payload: { msg, alertType, id },
//     })
//   }
// }
