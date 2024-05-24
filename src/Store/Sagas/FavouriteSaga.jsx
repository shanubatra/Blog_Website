import { takeEvery, put } from "redux-saga/effects";

import {
  addRecord,
  deleteRecord,
  getRecord,
} from "./Services/FavouriteService";
import {
  ADD_FAVOURITE,
  ADD_FAVOURITE_RED,
  DELETE_FAVOURITE,
  DELETE_FAVOURITE_RED,
  GET_FAVOURITE,
  GET_FAVOURITE_RED,
} from "../Constants";

function* addSaga(action) {
  let response = yield addRecord(action.payload);
  yield put({ type: ADD_FAVOURITE_RED, payload: response });
}

function* getSaga() {
  let response = yield getRecord();
  yield put({ type: GET_FAVOURITE_RED, payload: response });
}

function* deleteSaga(action) {
  yield deleteRecord(action.payload);
  yield put({ type: DELETE_FAVOURITE_RED, payload: action.payload });
}

export default function* favouriteSaga() {
  yield takeEvery(ADD_FAVOURITE, addSaga);
  yield takeEvery(GET_FAVOURITE, getSaga);
  yield takeEvery(DELETE_FAVOURITE, deleteSaga);
}
