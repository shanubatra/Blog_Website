import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACT } from "../Constants";

export function addContact(data) {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
}

export function getContact() {
  return {
    type: GET_CONTACT,
  };
}

export function deleteContact(data) {
  return {
    type: DELETE_CONTACT,
    payload: data,
  };
}
