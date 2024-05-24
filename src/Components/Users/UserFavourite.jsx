import React, { useEffect, useState } from "react";
import { FaTrash, FaArrowAltCircleRight } from "react-icons/fa";

import BreadCrumb from "../CustomHooks/BreadCrumb";
import UserSideBar from "./UserSideBar";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  deleteFavourite,
  getFavourite,
} from "../../Store/ActionCreators/FavoriteActionCreator";

export default function UserFavourite() {
  let [data, setData] = useState([]);
  let dispatch = useDispatch();

  let FavouriteStateData = useSelector((state) => state.FavouriteStateData);
  function getData() {
    dispatch(getFavourite());
    let data = FavouriteStateData.filter(
      (x) => x.userid === localStorage.getItem("userid")
    );
    setData(data);
  }
  function deleteItem(id) {
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteFavourite({ id: id }));
    }

    getData();
  }
  useEffect(() => {
    getData();
  }, [FavouriteStateData.length]);
  console.log(data);
  return (
    <>
      <BreadCrumb title="My Favourites" />
      <div className="flex flex-row justify-evenly flex-wrap font-display ">
        <div className="p-3 min-w-[370px]">
          <UserSideBar />
        </div>
        <div className="flex flex-col p-2 min-w-[75%]">
          <div>
            <h2 className="bg-yellow-600 p-2 rounded-xl text-center border-r-2 font-bold text-xl text-white">
              My Favourites
            </h2>
          </div>
          <div className="my-2">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    {data ? (
                      <table className="min-w-full bg-gray-300">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                            >
                              Id
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                            >
                              Pic
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                            >
                              Name
                            </th>{" "}
                            <th
                              scope="col"
                              className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                            >
                              Topic
                            </th>{" "}
                            <th
                              scope="col"
                              className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900 "
                            >
                              Category
                            </th>{" "}
                            <th
                              scope="col"
                              className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                            >
                              Desgination
                            </th>{" "}
                            <th
                              scope="col"
                              className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                            >
                              BioGraghy
                            </th>
                            <th className="border-r-2"></th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item, index) => {
                            return (
                              <tr
                                key={index}
                                className="odd:bg-gray-200  even:bg-gray-300"
                              >
                                <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                  {item.id}
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                  <Link to={`/blogpreview/${item.id}`}>
                                    <img
                                      src={`/images/${item.pic}`}
                                      alt={item.pic}
                                      className="w-[80px] rounded-2xl"
                                    />
                                  </Link>
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                  {item.name}
                                </td>{" "}
                                <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                  {item.topic.slice(0, 8)}
                                </td>{" "}
                                <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900 max-w-16">
                                  {item.category}
                                </td>{" "}
                                <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                  {item.desg}
                                </td>{" "}
                                <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                  {item.bio}
                                </td>
                                <td className="px-3 py-3 text-center">
                                  <button
                                    type="button"
                                    className=" text-base font-medium border border-transparent text-red-500 hover:text-red-600"
                                    onClick={() => {
                                      deleteItem(item.id);
                                    }}
                                  >
                                    <FaTrash />
                                  </button>
                                </td>
                                <td className="px-3 py-3 text-center">
                                  <Link
                                    type="button"
                                    className=" text-base font-medium border border-transparent text-blue-500 hover:text-blue-600"
                                    to={`/blogpreview/${item.blogid}`}
                                  >
                                    <FaArrowAltCircleRight />
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    ) : (
                      <>
                        <div className="flex flex-col justify-center items-center font-display">
                          <span className="text-3xl">
                            Explore Our Latest
                            <Link
                              className="text-3xl text-blue-700 font-bold"
                              to={"/allblog"}
                            >
                              {" "}
                              Blog
                            </Link>
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
