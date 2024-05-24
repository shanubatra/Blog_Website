import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./CategoryReducer";
import BlogReducer from "./BlogReducer";
import ContactReducer from "./ContactReducer";
import NewsletterReducer from "./NewsletterReducer";
import TestimonialReducer from "./TestimonialReducer";
import FavouriteReducer from "./FavouriteReducer";

export default combineReducers({
  CategoryStateData: CategoryReducer,
  BlogStateData: BlogReducer,
  ContactStateData: ContactReducer,
  NewsletterStateData: NewsletterReducer,
  TestimonialStateData: TestimonialReducer,
  FavouriteStateData: FavouriteReducer,
});
