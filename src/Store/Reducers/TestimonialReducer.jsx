import {
  ADD_TESTIMONIAL_RED,
  DELETE_TESTIMONIAL_RED,
  GET_TESTIMONIAL_RED,
  UPODATE_TESTIMONIAL_RED,
} from "../Constants";

export default function TestimonialReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_TESTIMONIAL_RED:
      newState = [...state];
      newState.push(action.payload);
      return newState;
    case GET_TESTIMONIAL_RED:
      return action.payload.reverse();
    case UPODATE_TESTIMONIAL_RED:
      index = state.findIndex((x) => x.id === action.payload.id);
      state[index].name = action.payload.name;
      state[index].email = action.payload.email;
      state[index].desg = action.payload.desg;
      state[index].message = action.payload.message;
      state[index].star = action.payload.star;
      return state;
    case DELETE_TESTIMONIAL_RED:
      newState = state.filter((x) => x.id !== action.payload.id);
      return newState;
    default:
      return state;
  }
}
