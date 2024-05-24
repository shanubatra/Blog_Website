import { takeEvery, put } from "redux-saga/effects";

import { addRecord, deleteRecord, getRecord } from "./Services/ContactService";
import {
  ADD_CONTACT,
  ADD_CONTACT_RED,
  DELETE_CONTACT,
  DELETE_CONTACT_RED,
  GET_CONTACT,
  GET_CONTACT_RED,
} from "../Constants";

function* addSaga(action) {
  let response = yield addRecord(action.payload);
  yield put({ type: ADD_CONTACT_RED, payload: response });
}

function* getSaga() {
  let response = yield getRecord();
  yield put({ type: GET_CONTACT_RED, payload: response });
}

function* deleteSaga(action) {
  yield deleteRecord(action.payload);
  yield put({ type: DELETE_CONTACT_RED, payload: action.payload });
}

export default function* contactSaga() {
  yield takeEvery(ADD_CONTACT, addSaga);
  yield takeEvery(GET_CONTACT, getSaga);
  yield takeEvery(DELETE_CONTACT, deleteSaga);
}
