import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaChrome } from "react-icons/fa";

import { getBlog } from "../Store/ActionCreators/BlogActionCreator";
import {
  addFavourite,
  getFavourite,
} from "../Store/ActionCreators/FavoriteActionCreator";

import BlogSlider from "./BlogSlider";

export default function BlogPreview() {
  let [data, setData] = useState([]);
  let { id } = useParams();
  let [blog, setBlog] = useState({});
  let dispatch = useDispatch();
  let BlogStateData = useSelector((state) => state.BlogStateData);
  let FavouriteStateData = useSelector((state) => state.FavouriteStateData);

  function getAPIData() {
    dispatch(getBlog());
    dispatch(getFavourite());
    let item = BlogStateData;
    if (item) setData(item);

    let blog = BlogStateData.find((x) => x.id === id);
    if (blog) setBlog(blog);
  }
  function addFav() {
    var item = FavouriteStateData.find(
      (x) => x.blogid === id && x.userid === localStorage.getItem("userid")
    );
    console.log(!item);
    if (!item) {
      item = {
        blogid: id,
        userid: localStorage.getItem("userid"),
        category: blog.category,
        desg: blog.desg,
        name: blog.name,
        bio: blog.bio,
        phone: blog.phone,
        topic: blog.topic,
        pic: blog.pic,
      };
      dispatch(addFavourite(item));
    }
  }
  useEffect(() => {
    getAPIData();
  }, [BlogStateData.length]);

  return (
    <>
      <div className="font-display">
        <div>
          <img
            src={`/images/${blog.pic}`}
            className="w-[100%] h-[750px] m-auto relative "
            alt="skjks"
          />
          <div className="absolute  text-3xl top-[55%] text-white">
            <p className="capitalize">{blog.topic}</p>
            <p className="capitalize ">{blog.category}</p>
          </div>
        </div>
        <div className="text-center py-12 px-6 mt-2 flex justify-center  items-center flex-col ">
          <h1 className=" font-bold text-3xl ">{blog.topic}</h1>
          <h1 className=" font-bold text-2xl ">Category:{blog.category}</h1>
          <div className="flex items-center">
            Add to Favourite
            <button
              className=" font-bold text-xl bg-white text-red-600 tracking-widest font-heading px-2 rounded-xl"
              onClick={addFav}
            >
              <FaHeart />
            </button>
          </div>
          <p className="max-w-lg mx-auto capitalize text-xl">{blog.content}</p>
          <div className="flex flex-col items-center  text-xl">
            <hr className="h-[2px] text-gray-900 w-[300px] m-2" />
            <div className="flex flex-row items-baseline gap-[10px] ">
              <Link to={`/blogerprofile/${blog.userid}`}>{blog.name}</Link>
            </div>
            <p className="text-sm">
              {blog.date}, {blog.time}
            </p>
            <div className="text-sm flex items-center  gap-2 ">
              website:{" "}
              <a href={`${blog.link1}`}>
                <FaChrome />
              </a>{" "}
              <a href={`${blog.link2}`}>
                <FaChrome />
              </a>
            </div>
          </div>
        </div>

        <h1 className=" font-bold text-5xl mb-6 text-center">Other Blogs</h1>
        <div className="container overflow-hidden px-4 flex lg:gap-12 pt-10 pb-24">
          <BlogSlider data={data} />
        </div>
      </div>
    </>
  );
}
