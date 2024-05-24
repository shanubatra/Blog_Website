import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import BreadCrumb from "../CustomHooks/BreadCrumb";
import { Link } from "react-router-dom";

export default function AdminHome() {
  let [data, setData] = useState([]);
  async function getData() {
    let response = await fetch(
      "http://localhost:8000/user/" + localStorage.getItem("userid"),
      {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    response = await response.json();
    if (response) setData(response);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <BreadCrumb title="Admin" />
      <div className="font-display">
        {" "}
        <div>
          <h2 className="text-white inline-block w-full bg-yellow-600 max-w-full py-2 rounded-xl text-center ">
            Admin Profile
          </h2>
        </div>
        <div className="flex flex-auto flex-wrap justify-around ">
          <div className="p-3 min-w-[300px]">
            <Sidebar />
          </div>
          <div className="p-1 flex flex-col min-w-[75%]">
            <div className="my-2">
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="w-full border rounded-sm">
                        <thead>
                          <th
                            colSpan={2}
                            className="pr-2 border-b text-center pl-4 py-2 bg-yellow-600
                        text-base font-bold text-white"
                          >
                            Admin Details
                          </th>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="pr-2 border-r-2 pl-4 py-2 text-start text-base font-bold text-gray-800"
                            >
                              Image
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap text-base text-gray-800 capitalize ">
                              <img
                                src={`/images/${data.pic}`}
                                className="lg:w-[400px]"
                                alt="iiiiiimg"
                              />
                            </td>
                          </tr>
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="pr-2 border-r-2 pl-4 py-2 text-start text-base font-bold text-gray-800"
                            >
                              Name
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap text-base text-gray-800 capitalize ">
                              {data.fname}
                            </td>
                          </tr>
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="pr-2 border-r-2 pl-4 py-2 text-start text-base font-bold text-gray-800"
                            >
                              UserName
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap text-base text-gray-800 capitalize ">
                              {data.username}
                            </td>
                          </tr>
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="pr-2 border-r-2 pl-4 py-2 text-start text-base font-bold text-gray-800"
                            >
                              Email id
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap text-base text-gray-800">
                              {data.email}
                            </td>
                          </tr>
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="pr-2 border-r-2 pl-4 py-2 text-start text-base font-bold text-gray-800"
                            >
                              Phone No
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap text-base text-gray-800 capitalize">
                              {data.phone}
                            </td>
                          </tr>{" "}
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="pr-2 border-r-2 pl-4 py-2 text-start text-base font-bold text-gray-800"
                            >
                              Address
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap text-base text-gray-800 capitalize">
                              {data.address}
                            </td>
                          </tr>{" "}
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="pr-2 border-r-2 pl-4 py-2 text-start text-base font-bold text-gray-800"
                            >
                              City
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap text-base text-gray-800 capitalize">
                              {data.city}
                            </td>
                          </tr>{" "}
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="pr-2 border-r-2 pl-4 py-2 text-start text-base font-bold text-gray-800"
                            >
                              State
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap text-base text-gray-800 capitalize">
                              {data.state}
                            </td>
                          </tr>{" "}
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="pr-2 border-r-2 pl-4 py-2 text-start text-base font-bold text-gray-800"
                            >
                              PinCode
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap text-base text-gray-800 capitalize">
                              {data.pin}
                            </td>
                          </tr>{" "}
                          <tr>
                            <td
                              colSpan={2}
                              className="px-3 py-2 whitespace-nowrap text-base text-gray-800 capitalize"
                            >
                              <Link to="/updateprofile">
                                <button className="p-2 text-center bg-yellow-700 w-full rounded-xl text-white font-bold">
                                  Update Profile
                                </button>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
