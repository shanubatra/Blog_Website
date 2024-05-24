import { all } from "redux-saga/effects";
import categorySaga from "./CategorySaga";
import blogSaga from "./BlogSags";
import contactSaga from "./ContactSagas";
import newsletterSaga from "./NewsletterSaga";
import testimonialSaga from "./TestimonialsSaga";
import FavouriteSaga from "./FavouriteSaga";

export default function* RootSaga() {
  yield all([
    categorySaga(),
    blogSaga(),
    contactSaga(),
    newsletterSaga(),
    testimonialSaga(),
    FavouriteSaga(),
  ]);
}
