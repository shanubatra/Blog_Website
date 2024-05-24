import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BlogSlider from "./BlogSlider";
import { getBlog } from "../Store/ActionCreators/BlogActionCreator";
import TestimonialSlider from "./TestimonialSlider";
import { FaArrowCircleRight } from "react-icons/fa";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  let dispatch = useDispatch();

  let [data, setData] = useState([]);
  let [sort, setSort] = useState([]);
  let [single, setSingle] = useState({});

  let BlogStateData = useSelector((state) => state.BlogStateData);

  function getAPIData() {
    dispatch(getBlog());

    setData(BlogStateData);
    setSort(BlogStateData);

    let sh = BlogStateData.splice(0, 1);
    setSingle(sh[0]);
  }
  function sorting(opt = "") {
    let srt = [];
    if (opt === " ") {
      setSort(BlogStateData);
    } else if (opt === "travel") {
      srt = BlogStateData.filter((x) => x.category === "Travel Blogs");
      setSort(srt);
    } else if (opt === "education") {
      srt = BlogStateData.filter((x) => x.category === "Educational Blogs");
      setSort(srt);
    } else if (opt === "news") {
      srt = BlogStateData.filter(
        (x) => x.category === "News or Current events Blogs"
      );
      setSort(srt);
    }
  }
  useEffect(() => {
    getAPIData();
    // window.addEventListener("contextmenu", (e) => {
    //   e.preventDefault();
    // });
  }, [BlogStateData.length]);
  return (
    <>
      <div className="font-display">
        <div className="w-full h-24 bg-yellow-900 bg-opacity-95 top-0 left-0"></div>
        <div className="-mt-24 relative w-full py-12 px-12 bg-yellow-900">
          <div className="relative z-10 text-center py-24 md:py-48">
            <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize font-bold mb-12">
              login to discover everyone's lifestyle
            </h1>
            <Link
              to={localStorage.getItem("login") ? "/profile/blog" : "/login"}
              className="inline-block hover:bg-yellow-800 rounded-xl border font-bold text-white Capitalize text-lg tracking-widest font-heading px-8 py-4"
            >
              Add Yours{" "}
            </Link>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
            <Link to="/aboutus" className="hover:border-white hover:border-b ">
              Find out more
            </Link>
            <Link to="/contact" className="hover:border-white hover:border-b">
              Get in touch
            </Link>
          </div>

          <img
            alt="img"
            src="/images/home.avif"
            className="w-full h-full absolute inset-0 object-cover opacity-70"
          />
        </div>
        {single ? (
          <div className="grid lg:grid-cols-2 md:grid-cols-1">
            <div className="bg-white lg:p-12 md:p-24 flex justify-end items-center">
              <a href="/allblog">
                {single.pic ? (
                  <img
                    alt="img"
                    src={`/images/${single.pic}`}
                    className="w-[100%]"
                  />
                ) : (
                  <Skeleton
                    baseColor="#d6d6d6"
                    highlightColor="#f5f5f5c9"
                    width={250}
                    height={300}
                    containerClassName="flex-1"
                  />
                )}
              </a>
            </div>
            <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
              <div className="max-w-md">
                <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
                <h2 className=" font-bold md:text-3xl capitalizes lg:text-4xl mb-6">
                  {single.topic || (
                    <Skeleton baseColor="#d6d6d6" highlightColor="#f5f5f5c9" />
                  )}
                </h2>
                <p className="font-light  text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                  {single.content ? (
                    single.content.slice(0, 300)
                  ) : (
                    <Skeleton
                      baseColor="#d6d6d6"
                      highlightColor="#f5f5f5c9"
                      count={5}
                    />
                  )}
                </p>
                <a
                  href="/allblog"
                  className="inline-block border-2  border-yellow-800 text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white rounded-xl font-semibold"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ) : (
          <Skeleton height={500} className="m-2" />
        )}
        <div className="flex justify-evenly items-center flex-wrap gap-4 my-8">
          <div className="font-bold text-yellow-600">
            <h1 className="text-[54px] text-center ">Our Latest Blogs</h1>
          </div>
          <div className="col-lg-8 text-end">
            <ul className="flex flex-wrap justify-center gap-3 flex-col md:flex-row text-center mb-3">
              <li>
                <button
                  className="mx-5 py-2  bg-yellow-600 px-4 rounded-2xl text-white font-bold text-xl"
                  onClick={() => {
                    sorting(" ");
                  }}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className=" py-2 mx-5  bg-yellow-600 px-4 rounded-2xl text-white font-bold text-xl"
                  onClick={() => {
                    sorting("travel");
                  }}
                >
                  Travel
                </button>
              </li>
              <li>
                <button
                  className=" mx-5 py-2  bg-yellow-600 px-4 rounded-2xl text-white font-bold text-xl"
                  onClick={() => {
                    sorting("news");
                  }}
                >
                  News
                </button>
              </li>
              <li>
                <button
                  className="mx-5 py-2  bg-yellow-600 px-4 rounded-2xl text-white font-bold text-xl"
                  onClick={() => {
                    sorting("education");
                  }}
                >
                  Education
                </button>
              </li>
            </ul>
          </div>
        </div>
        {sort ? (
          <div className="flex flex-row w-full flex-wrap justify-center  gap-3 items-baseline">
            {sort.map((item, index) => {
              return (
                <div key={index} className="w-[300px] border rounded-xl">
                  <Link to={`/allblog`}>
                    {item.pic ? (
                      <img
                        alt="img"
                        src={`/images/${item.pic}`}
                        className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover rounded-t-xl "
                      />
                    ) : (
                      <Skeleton
                        baseColor="#d6d6d6"
                        highlightColor="#f5f5f5c9"
                        width={300}
                        height={250}
                      />
                    )}
                  </Link>

                  <Link to={`/blogpreview/${item.id}`}>
                    <div className="bg-gray-50 p-8 rounded-b-xl">
                      <div className="text-xs text-gray-600 uppercase font-semibold">
                        Published on-
                        {item.date || (
                          <Skeleton
                            baseColor="#d6d6d6"
                            highlightColor="#f5f5f5c9"
                          />
                        )}
                      </div>
                      <h2 className="mt-3 text-3xl   text-black leading-tight max-w-sm">
                        {item.topic ? (
                          item.topic.slice(0, 15)
                        ) : (
                          <Skeleton
                            baseColor="#d6d6d6"
                            highlightColor="#f5f5f5c9"
                          />
                        )}
                      </h2>
                      <h4 className=" text-xl mb-6  text-black leading-tight max-w-sm">
                        {item.category || (
                          <Skeleton
                            baseColor="#d6d6d6"
                            highlightColor="#f5f5f5c9"
                          />
                        )}{" "}
                      </h4>
                      <p className="mt-4 max-w-md">
                        {item.content ? (
                          item.content.slice(0, 120) + "..."
                        ) : (
                          <Skeleton
                            baseColor="#d6d6d6"
                            highlightColor="#f5f5f5c9"
                            count={5}
                          />
                        )}
                      </p>
                      <Link
                        to={`/allblog`}
                        className="flex items-center  mt-6  uppercase text-sm text-black font-semibold"
                      >
                        Read article
                        <FaArrowCircleRight className="ml-2 text-yellow-600" />
                      </Link>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <Skeleton height={500} className="m-2" />
        )}

        <div className="my-10 mx-10">
          <BlogSlider data={data} at="home" />
        </div>

        <div className="relative w-full py-12 px-12">
          <div className="relative z-10 text-center py-12 md:py-24">
            <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold mb-6">
              Join Millions of others
            </h1>
            <p className="text-white mb-3 text-base md:text-lg font-bold">
              Whether sharing your expertise, breaking news, or whatever's on
              your mind, you're at good platform.
            </p>
            <Link
              to={localStorage.getItem("login") ? "/allblog" : "/login"}
              className="inline-block hover:bg-yellow-800 border rounded-xl text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
            >
              Explore More
            </Link>
          </div>

          <img
            alt="img"
            src="/images/side5.png"
            className="w-full h-full absolute inset-0 object-cover"
          />
        </div>

        <div className="my-10 mx-9">
          <TestimonialSlider breadcrumb="false" />
        </div>
      </div>
    </>
  );
}
