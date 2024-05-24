import {
  ADD_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  GET_TESTIMONIAL,
  UPODATE_TESTIMONIAL,
} from "../Constants";

export function addTestimonial(data) {
  return {
    type: ADD_TESTIMONIAL,
    payload: data,
  };
}

export function getTestimonial() {
  return {
    type: GET_TESTIMONIAL,
  };
}

export function updateTestimonial(data) {
  return {
    type: UPODATE_TESTIMONIAL,
    payload: data,
  };
}

export function deleteTestimonial(data) {
  return {
    type: DELETE_TESTIMONIAL,
    payload: data,
  };
}
