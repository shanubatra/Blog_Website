import {
  ADD_CONTACT_RED,
  DELETE_CONTACT_RED,
  GET_CONTACT_RED,
} from "../Constants";

export default function ContactReducer(state = [], action) {
  let newState;
  switch (action.type) {
    case ADD_CONTACT_RED:
      newState = [...state];
      newState.push(action.payload);
      return newState;
    case GET_CONTACT_RED:
      return action.payload.reverse();
    case DELETE_CONTACT_RED:
      newState = state.filter((x) => x.id !== action.payload.id);
      return newState;
    default:
      return state;
  }
}
