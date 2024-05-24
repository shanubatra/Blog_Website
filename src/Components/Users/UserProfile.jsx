import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../CustomHooks/BreadCrumb";
import UserSideBar from "./UserSideBar";
export default function UserProfile() {
  let [data, setData] = useState({});
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
      <BreadCrumb title="Profile" />

      <div className="flex flex-row justify-evenly flex-wrap font-display ">
        <div className="p-3 w-[370px]">
          <UserSideBar />
        </div>
        <div className="p-2 flex flex-col min-w-[75%] ">
          <div>
            <h2 className="bg-yellow-600 p-2 rounded-xl text-center border-r-2 font-bold text-xl text-white">
              My Profile
            </h2>
          </div>
          <div className=" mt-3 gap-5">
            <div className="">
              <table className="border w-full">
                <thead>
                  <tr>
                    <th colSpan={2} className="border-b text-2xl py-2">
                      User Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      Image
                    </th>
                    <td className="p-2 capitalize">
                      <img
                        src={`/images/${data.pic}`}
                        className="w-[400px] h-[250px] "
                        alt="iiiiiimg"
                      />
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      Name
                    </th>
                    <td className="p-2 capitalize">{data.fname}</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      UserName
                    </th>
                    <td className="p-2 capitalize">{data.username}</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      Email id
                    </th>
                    <td className="p-2">{data.email}</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      Phone No
                    </th>
                    <td className="capitalize p-2">{data.phone}</td>
                  </tr>{" "}
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      Address
                    </th>
                    <td className="capitalize p-2">{data.address}</td>
                  </tr>{" "}
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      City
                    </th>
                    <td className="capitalize p-2">{data.city}</td>
                  </tr>{" "}
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      State
                    </th>
                    <td className="capitalize p-2">{data.state}</td>
                  </tr>{" "}
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      PinCode
                    </th>
                    <td className="p-2">{data.pin}</td>
                  </tr>{" "}
                  <tr>
                    <td colSpan={2} className="p-2">
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
          </div>{" "}
        </div>
      </div>
    </>
  );
}
