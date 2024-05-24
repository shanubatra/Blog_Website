import React, { useEffect, useState } from "react";
import BreadCrumb from "../../CustomHooks/BreadCrumb";
import Sidebar from "../Sidebar";
import { FaTrash, FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBlog,
  getBlog,
} from "../../../Store/ActionCreators/BlogActionCreator";

export default function AdminUserBlog() {
  let [data, setData] = useState([]);
  let { id } = useParams();
  let dispatch = useDispatch();
  let BlogStateData = useSelector((state) => state.BlogStateData);
  async function getApiData() {
    dispatch(getBlog());
    let item = BlogStateData.filter((x) => x.userid === id);
    if (item) setData(item);
  }
  function deleteItem(id) {
    if (window.confirm("Are you sure to delete it"))
      dispatch(deleteBlog({ id: id }));
    getApiData();
  }
  useEffect(() => {
    getApiData();
  }, [BlogStateData.length]);
  return (
    <>
      <BreadCrumb title="User Blog" />
      <div className="flex justify-around flex-wrap font-display">
        <div className="p-3 w-[370px]">
          <Sidebar />
        </div>
        <div className="flex flex-col p-2 min-w-[75%] ">
          <div>
            <h2 className="bg-yellow-600 p-2 rounded-xl text-center border-r-2 font-bold text-xl text-white">
              All User Blog
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
                              className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                            >
                              Category
                            </th>{" "}
                            <th
                              scope="col"
                              className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                            >
                              Desgination
                            </th>{" "}
                            <th className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900">
                              Date &
                              <br />
                              Time Of Publish
                            </th>{" "}
                            <th
                              scope="col"
                              className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                            >
                              BioGraghy
                            </th>
                            <th className="border-r-2"></th>
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
                                <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                  {item.category}
                                </td>{" "}
                                <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                  {item.desg}
                                </td>{" "}
                                <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900 ">
                                  {item.date}
                                  <br /> {item.time}
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
                                    to={`/blogpreview/${item.id}`}
                                    className=" text-base font-medium border border-transparent text-gray-500 hover:text-gray-600"
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
                      " "
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
