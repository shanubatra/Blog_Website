import React, { useEffect, useState } from "react";
import BreadCrumb from "../../CustomHooks/BreadCrumb";
import Sidebar from "../Sidebar";
import { FaTrash, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function USers() {
  let [data, setData] = useState([]);
  async function getApiData() {
    let response = await fetch("http://localhost:8000/user", {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    if (response) setData(response);
  }
  async function deleteItem(id) {
    if (window.confirm("Are you sure you want to delete")) {
      let response = await fetch("http://localhost:8000/user/" + id, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      });
      response = await response.json();
    }
    getApiData();
  }
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <BreadCrumb title="Users" />
      <div className="flex justify-around flex-wrap font-display">
        <div className="p-3 w-[370px]">
          <Sidebar />
        </div>
        <div className="flex flex-col p-2 min-w-[75%] ">
          <div>
            <h2 className="bg-yellow-600 p-2 rounded-xl text-center border-r-2 font-bold text-xl text-white">
              All Users
            </h2>
          </div>
          <div className="my-2 ">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full bg-gray-300">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="pr-3 pl-4 py-2 text-start text-base border-r-2 font-bold text-gray-900"
                          >
                            Role
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold text-gray-900"
                          >
                            UserName
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold text-gray-900"
                          >
                            Phone No.
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold text-gray-900 "
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold text-gray-900"
                          >
                            Address
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold text-gray-900"
                          >
                            City
                          </th>{" "}
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold text-gray-900"
                          >
                            State
                          </th>{" "}
                          <th
                            scope="col"
                            className="px-3 py-2 text-start text-base border-r-2 font-bold text-gray-900"
                          >
                            PinCode
                          </th>{" "}
                          <th className="border-r-2"></th>
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
                              <td className="pr-3 pl-4 py-3 whitespace-nowrap font-medium text-base text-gray-900 ">
                                {item.role}
                              </td>
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.fname}
                              </td>
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.username}
                              </td>
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.phone}
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.email.slice(0, 10)}...
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.address}
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.city}
                              </td>
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.state}
                              </td>{" "}
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                                {item.pin}
                              </td>
                              <td className="px-3 py-3">
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
                              <td className="px-3 py-3">
                                <Link
                                  type="button"
                                  to={"/admin/user/userblog/" + item.id}
                                  className=" text-base font-medium border border-transparent text-gray-500 hover:text-gray-600"
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
