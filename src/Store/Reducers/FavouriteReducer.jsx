import {
  ADD_FAVOURITE_RED,
  DELETE_FAVOURITE_RED,
  GET_FAVOURITE_RED,
} from "../Constants";

export default function FavouriteReducer(state = [], action) {
  let newState;
  switch (action.type) {
    case ADD_FAVOURITE_RED:
      newState = [...state];
      newState.push(action.payload);
      return newState;
    case GET_FAVOURITE_RED:
      return action.payload.reverse();
    case DELETE_FAVOURITE_RED:
      newState = state.filter((x) => x.id !== action.payload.id);
      return newState;
    default:
      return state;
  }
}
