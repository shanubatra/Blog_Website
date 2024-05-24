import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import BlogPreview from "./BlogPreview";
import Error from "./Error";
import AdminHome from "./Admin/AdminHome";
import UserProfile from "./Users/UserProfile";
import Category from "./Admin/Category/Category";
import CreateCategory from "./Admin/Category/CreateCategory";
import UpdateCategory from "./Admin/Category/UpdateCategory";
import Login from "./Login";
import SignUp from "./SignUp";
import UpdateProfile from "./Users/UpdateProfile";
import USers from "./Admin/User/Users";
import Blog from "./Admin/Blogs/Blog";
import CreateBlog from "./Admin/Blogs/CreateBlog";
import UpdateBlog from "./Admin/Blogs/UpdateBlog";
import UserCategory from "./Users/UserCategory";
import UserBlog from "./Users/UserBlog";
import AdminContact from "./Admin/Contact/AdminContact";
import ContactRead from "./Admin/Contact/ContactRead";
import Newsletter from "./Admin/Newsletter/NewsLetter";
import Testimonial from "./Admin/Testimonial/Testimonial";
import CreateTestimonial from "./Admin/Testimonial/CreateTestimonial";
import UpdateTestimonial from "./Admin/Testimonial/UpdateTestimonial";
import TestimonialSlider from "./TestimonialSlider";
import TestimonialRead from "./TestimonialRead";
import AboutUs from "./AboutUs";
import Blogs from "./Blogs";
import UserFavourite from "./Users/UserFavourite";
import BlogerProfile from "./BlogerProfile";
import AdminUserBlog from "./Admin/User/AdminUserBlog";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<TestimonialSlider />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/allblog" element={<Blogs />} />
          <Route path="/*" element={<Error />} />

          {localStorage.getItem("login") ? (
            <>
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/updateprofile" element={<UpdateProfile />} />
              <Route path="/profile/category" element={<UserCategory />} />
              <Route path="/profile/blog" element={<UserBlog />} />
              <Route path="/profile/fav" element={<UserFavourite />} />

              <Route path="/blogpreview/:id" element={<BlogPreview />} />
              <Route path="/blogerprofile/:id" element={<BlogerProfile />} />

              <Route path="/testimonial/:id" element={<TestimonialRead />} />

              <Route path="/category/create" element={<CreateCategory />} />
              <Route path="/category/update/:id" element={<UpdateCategory />} />
              <Route path="/blog/create" element={<CreateBlog />} />
              <Route path="/blog/update/:id" element={<UpdateBlog />} />
            </>
          ) : (
            ""
          )}

          {localStorage.getItem("login") &&
          localStorage.getItem("role") === "Admin" ? (
            <>
              <Route path="/admin" element={<AdminHome />} />

              <Route path="/admin/user" element={<USers />} />
              <Route
                path="/admin/user/userblog/:id"
                element={<AdminUserBlog />}
              />

              <Route path="/admin/category" element={<Category />} />

              <Route path="/admin/blog" element={<Blog />} />

              <Route path="/admin/contactus" element={<AdminContact />} />
              <Route
                path="/admin/contactus/read/:id"
                element={<ContactRead />}
              />

              <Route path="/admin/newsletters" element={<Newsletter />} />
              <Route
                path="/admin/newsletters/read/:id"
                element={<Newsletter />}
              />

              <Route path="/admin/testimonial" element={<Testimonial />} />
              <Route
                path="/admin/testimonial/create"
                element={<CreateTestimonial />}
              />
              <Route
                path="/admin/testimonial/update/:id"
                element={<UpdateTestimonial />}
              />
            </>
          ) : (
            ""
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
