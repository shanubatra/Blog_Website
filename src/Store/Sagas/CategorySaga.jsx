import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_CATEGORY,
  ADD_CATEGORY_RED,
  DELETE_CATEGORY,
  DELETE_CATEGORY_RED,
  GET_CATEGORY,
  GET_CATEGORY_RED,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_RED,
} from "../Constants";
import {
  addRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "./Services/CategoryService";
function* addSaga(action) {
  let response = yield addRecord(action.payload);
  yield put({ type: ADD_CATEGORY_RED, payload: response });
}
function* getSaga() {
  let response = yield getRecord();
  yield put({ type: GET_CATEGORY_RED, payload: response });
}
function* updateSaga(action) {
  yield updateRecord(action.payload);
  yield put({ type: UPDATE_CATEGORY_RED, payload: action.payload });
}
function* deleteSaga(action) {
  yield deleteRecord(action.payload);
  yield put({ type: DELETE_CATEGORY_RED, payload: action.payload });
}

export default function* categorySaga() {
  yield takeEvery(ADD_CATEGORY, addSaga);
  yield takeEvery(GET_CATEGORY, getSaga);
  yield takeEvery(UPDATE_CATEGORY, updateSaga);
  yield takeEvery(DELETE_CATEGORY, deleteSaga);
}
