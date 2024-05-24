import { put, takeEvery } from "redux-saga/effects";
import {
  addRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "./Services/BlogService";
import {
  ADD_BLOG,
  ADD_BLOG_RED,
  DELETE_BLOG,
  DELETE_BLOG_RED,
  GET_BLOG,
  GET_BLOG_RED,
  UPDATE_BLOG,
  UPDATE_BLOG_RED,
} from "../Constants";

function* addBlog(action) {
  let response = yield addRecord(action.payload);
  yield put({ type: ADD_BLOG_RED, payload: response });
}

function* getBlog() {
  let response = yield getRecord();
  yield put({ type: GET_BLOG_RED, payload: response });
}
function* updateBlog(action) {
  yield updateRecord(action.payload);
  yield put({ type: UPDATE_BLOG_RED, payload: action.payload });
}

function* deleteBlog(action) {
  yield deleteRecord(action.payload);
  yield put({ type: DELETE_BLOG_RED, payload: action.payload });
}

export default function* blogSaga() {
  yield takeEvery(ADD_BLOG, addBlog);
  yield takeEvery(GET_BLOG, getBlog);
  yield takeEvery(UPDATE_BLOG, updateBlog);
  yield takeEvery(DELETE_BLOG, deleteBlog);
}
