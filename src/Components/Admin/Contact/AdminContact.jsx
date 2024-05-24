import React, { useEffect, useState } from "react";
import BreadCrumb from "../../CustomHooks/BreadCrumb";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getContact,
} from "../../../Store/ActionCreators/ContactActionCreator";
import { FaTrash, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function AdminContact() {
  let [data, setData] = useState([]);
  let dispatch = useDispatch();
  let ContactStateData = useSelector((state) => state.ContactStateData);

  function getAPIData() {
    dispatch(getContact());
    if (ContactStateData) setData(ContactStateData);
  }
  function deleteItem(id) {
    if (window.confirm("Are you sure you want to delete It"))
      dispatch(deleteContact({ id: id }));

    getAPIData();
  }
  useEffect(() => {
    getAPIData();
  }, [ContactStateData.length]);
  return (
    <>
      <BreadCrumb title="Contact" />
      <div className="flex justify-around flex-wrap flex-auto font-display">
        <div className="p-3 w-[370px]">
          <Sidebar />
        </div>
        <div className="flex flex-col p-2 min-w-[75%]">
          <div>
            <h2 className="bg-yellow-600 p-2 rounded-xl text-center border-r-2 font-bold text-xl text-white">
              All Contact
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
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                          >
                            Email
                          </th>{" "}
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                          >
                            Designation
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
                            Date
                          </th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.reverse().map((item, index) => {
                          return (
                            <tr
                              key={index}
                              className="odd:bg-gray-200  even:bg-gray-300"
                            >
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.id}
                              </td>
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.name}
                              </td>
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.email}
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.desg}
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.message.slice(0, 20)}....
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.date}
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
                                  className=" text-base font-medium border border-transparent text-gray-500 hover:text-gray-700"
                                  to={`/admin/contactus/read/${item.id}`}
                                >
                                  <FaArrowCircleRight />
                                </Link>
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
