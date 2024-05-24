import {
  ADD_BLOG_RED,
  DELETE_BLOG_RED,
  GET_BLOG_RED,
  UPDATE_BLOG_RED,
} from "../Constants";

export default function Blog_REDReducer(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_BLOG_RED:
      newState = [...state];
      newState.push(action.payload);
      return newState;
    case GET_BLOG_RED:
      return action.payload.reverse();
    case UPDATE_BLOG_RED:
      index = state.findindex((x) => x.id == action.payload.id);
      state[index].topic = action.payload.topic;
      state[index].name = action.payload.name;
      state[index].desg = action.payload.desg;
      state[index].phone = action.payload.phone;
      state[index].link1 = action.payload.link1;
      state[index].link2 = action.payload.link2;
      state[index].bio = action.payload.bio;
      state[index].content = action.payload.content;
      state[index].category = action.payload.category;
      state[index].pic = action.payload.pic;

      return state;
    case DELETE_BLOG_RED:
      newState = state.filter((x) => x.id !== action.payload.id);
      return newState;
    default:
      return state;
  }
}
