import React, { useEffect, useState } from "react";
import BreadCrumb from "./CustomHooks/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Store/ActionCreators/CategoryActionCreators";
import { FaSearch, FaArrowCircleRight } from "react-icons/fa";
import { getBlog } from "../Store/ActionCreators/BlogActionCreator";
import { Link } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Blogs() {
  let [blog, setBlog] = useState([]);
  let [search, setSearch] = useState("");
  let dispatch = useDispatch();
  let CategoryStateData = useSelector((state) => state.CategoryStateData);
  let BlogStateData = useSelector((state) => state.BlogStateData);

  function getAPIData() {
    dispatch(getBlog());
    dispatch(getCategory());
    if (BlogStateData) setBlog(BlogStateData);
  }

  function categoryFilter(c = "") {
    let data = [];
    if (c === "") {
      setBlog(BlogStateData);
    } else {
      data = BlogStateData.filter((x) => x.category === c);
      setBlog(data);
    }
  }

  function postSearch() {
    let ch = search.toLocaleLowerCase();
    setBlog(
      BlogStateData.filter((x) => {
        x.name.toLocaleLowerCase().includes(ch) ||
          x.category.toLocaleLowerCase() === ch ||
          x.topic.toLocaleLowerCase() === ch ||
          x.content.toLocaleLowerCase().includes();
      })
    );
  }

  useEffect(() => {
    getAPIData();
  }, [CategoryStateData.length, BlogStateData.length]);
  return (
    <>
      <BreadCrumb title="Blogs" />
      <div className="font-display">
        <div className="container-fluid py-3 ">
          <div className="flex flex-col">
            <div className=" w-full justify-center mx-auto flex flex-wrap m-2 ">
              <input
                type="search"
                className="w-[75%] p-2 border-2 rounded-2xl mr-2"
                name="name"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Product with Name,Brand,Maincategory,Subcategory etc"
                aria-describedby="search-icon-1"
              />
              <button
                onClick={postSearch}
                className="p-3 bg-yellow-700 text-white rounded-xl"
              >
                <FaSearch size={25} />
              </button>
            </div>
            <div className="flex flex-row justify-evenly flex-wrap p-2 ">
              <div className="m-2 min-w-[20%]">
                <div className="mb-3">
                  <ul className="flex flex-col border rounded-2xl py-">
                    <li className=" px-2 py-3  rounded-lg text-white bg-yellow-700 font-bold">
                      Categories
                    </li>
                    <li className="border-b-2 ">
                      <button
                        onClick={() => {
                          categoryFilter("");
                        }}
                        className="text-start  text-gray-950 w-full hover:bg-yellow-700 hover:text-white rounded-xl p-2"
                      >
                        All
                      </button>
                    </li>
                    {CategoryStateData.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={` ${
                            index !== CategoryStateData.length - 1
                              ? "border-b-2 "
                              : ""
                          }`}
                        >
                          {item.name ? (
                            <button
                              className="text-start  text-gray-950 w-full hover:bg-yellow-700 hover:text-white rounded-xl p-2"
                              onClick={() => {
                                categoryFilter(item.name);
                              }}
                            >
                              {item.name}
                            </button>
                          ) : (
                            <Skeleton
                              baseColor="#d6d6d6"
                              highlightColor="#f5f5f5c9"
                            />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="w-[75%] m-2">
                <div className="flex flex-row w-full flex-wrap gap-9 items-baseline">
                  {blog.map((item, index) => {
                    return (
                      <div key={index} className="w-[300px] border rounded-xl">
                        <Link to={`/blogpreview/${item.id}`}>
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
                            <h2 className="mt-3 text-3xl  text-black leading-tight max-w-sm">
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
                                item.content.slice(0, 120)
                              ) : (
                                <Skeleton
                                  baseColor="#d6d6d6"
                                  highlightColor="#f5f5f5c9"
                                  count={5}
                                />
                              )}
                            </p>
                            <Link
                              to={`/blogpreview/${item.id}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
