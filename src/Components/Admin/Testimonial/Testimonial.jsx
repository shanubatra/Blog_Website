import React, { useEffect, useState } from "react";
import BreadCrumb from "../../CustomHooks/BreadCrumb";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTestimonial,
  getTestimonial,
} from "../../../Store/ActionCreators/TestimonialActionCreator";
import { FaTrash, FaEdit } from "react-icons/fa";
export default function Testimonial() {
  let [data, setData] = useState([]);
  let dispatch = useDispatch();
  let TestimonialStateData = useSelector((state) => state.TestimonialStateData);

  function getAPIData() {
    dispatch(getTestimonial());
    if (TestimonialStateData) setData(TestimonialStateData);
  }
  function deleteItem(id) {
    if (window.confirm("Are you sure you want to delete It"))
      dispatch(deleteTestimonial({ id: id }));

    getAPIData();
  }
  useEffect(() => {
    getAPIData();
  }, [TestimonialStateData.length]);
  return (
    <>
      <BreadCrumb title="Testimonial" />
      <div className="flex justify-around flex-wrap flex-auto font-display">
        <div className="p-3 w-[370px]">
          <Sidebar />
        </div>
        <div className="flex flex-col p-2 min-w-[75%]">
          <div>
            <h2 className="bg-yellow-600 p-2 rounded-xl text-center border-r-2 font-bold text-xl text-white">
              All Testimonials
              <Link
                to="/admin/Testimonial/create"
                className="float-right min-mr-4 bg-yellow-900 font-thin rounded-2xl px-5 "
              >
                + Add
              </Link>
            </h2>
          </div>
          <div className="my-2">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
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
                            Profession{" "}
                          </th>{" "}
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                          >
                            Message
                          </th>{" "}
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                          >
                            Star
                          </th>{" "}
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
                                <img
                                  src={`/images/${item.pic1}`}
                                  className="w-[80px] rounded-[100%]"
                                />{" "}
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.name}
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.profession}
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.message.slice(0, 20)}....
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.star}
                              </td>{" "}
                              <td className="px-3 py-3 text-center">
                                <Link
                                  type="button"
                                  className=" text-base font-medium border border-transparent text-blue-500 hover:text-blue-900"
                                  to={"/admin/Testimonial/update/" + item.id}
                                >
                                  <FaEdit />
                                </Link>
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
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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
