import {
  ADD_CATEGORY_RED,
  DELETE_CATEGORY_RED,
  GET_CATEGORY_RED,
  UPDATE_CATEGORY_RED,
} from "../Constants";

export default function CategoryReducer(state = [], action) {
  let index, newState;
  switch (action.type) {
    case GET_CATEGORY_RED:
      return action.payload.reverse();
    case ADD_CATEGORY_RED:
      newState = [...state];
      newState.push(action.payload);
      return newState;
    case UPDATE_CATEGORY_RED:
      index = state.findIndex((x) => x.id === action.payload.id);
      state[index].name = action.payload.name;
      return state;
    case DELETE_CATEGORY_RED:
      newState = state.filter((x) => x.id !== action.payload.id);
      return newState;
    default:
      return state;
  }
}
