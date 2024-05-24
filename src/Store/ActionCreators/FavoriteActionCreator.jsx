import { ADD_FAVOURITE, DELETE_FAVOURITE, GET_FAVOURITE } from "../Constants";

export function addFavourite(data) {
  return {
    type: ADD_FAVOURITE,
    payload: data,
  };
}

export function getFavourite() {
  return {
    type: GET_FAVOURITE,
  };
}

export function deleteFavourite(data) {
  return {
    type: DELETE_FAVOURITE,
    payload: data,
  };
}
