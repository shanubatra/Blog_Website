import { ADD_BLOG, DELETE_BLOG, GET_BLOG, UPDATE_BLOG } from "../Constants";

export function getBlog() {
  return {
    type: GET_BLOG,
  };
}

export function addBlog(data) {
  return {
    type: ADD_BLOG,
    payload: data,
  };
}
export function updateBlog(data) {
  return {
    type: UPDATE_BLOG,
    payload: data,
  };
}
export function deleteBlog(data) {
  return {
    type: DELETE_BLOG,
    payload: data,
  };
}
