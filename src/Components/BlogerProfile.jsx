import React, { useEffect, useState } from "react";
import BreadCrumb from "./CustomHooks/BreadCrumb";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { getBlog } from "../Store/ActionCreators/BlogActionCreator";
export default function BlogerProfile() {
  let { id } = useParams();
  let [user, setUser] = useState({});
  let [data, setData] = useState([]);

  let dispatch = useDispatch();

  let BlogStateData = useSelector((state) => state.BlogStateData);

  async function getAPIuser() {
    let response = await fetch("http://localhost:8000/user/" + id, {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    if (response) setUser(response);
  }

  function getData() {
    dispatch(getBlog());
    if (BlogStateData.length) {
      let item = BlogStateData.filter((x) => x.userid === id);
      if (item) setData(item);
    }
  }
  console.log(data);
  useEffect(() => {
    getAPIuser();
    getData();
  }, [BlogStateData.length]);
  return (
    <>
      <div className="font-display">
        <BreadCrumb title={user.username} />
        <div className="flex flex-wrap items-center justify-around flex-row">
          <div className="max-w-[530px]">
            <img src={`/images/${user.pic}`} className=" px-3 py-4 border" />
          </div>
          <div className="min-w-[60%] mt-3 gap-5">
            <div className="">
              <table className="border w-full">
                <thead>
                  <tr>
                    <th colSpan={2} className="border-b text-2xl py-2">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      Name
                    </th>
                    <td className="p-2 capitalize">{user.fname}</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      UserName
                    </th>
                    <td className="p-2 capitalize">{user.username}</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      Email id
                    </th>
                    <td className="p-2">{user.email}</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      Phone No
                    </th>
                    <td className="capitalize p-2">{user.phone}</td>
                  </tr>{" "}
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      Address
                    </th>
                    <td className="capitalize p-2">{user.address}</td>
                  </tr>{" "}
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      City
                    </th>
                    <td className="capitalize p-2">{user.city}</td>
                  </tr>{" "}
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      State
                    </th>
                    <td className="capitalize p-2">{user.state}</td>
                  </tr>{" "}
                  <tr className="bg-white border-b ">
                    <th scope="row" className="p-2 border-r">
                      PinCode
                    </th>
                    <td className="p-2">{user.pin}</td>
                  </tr>{" "}
                </tbody>
              </table>
            </div>
          </div>{" "}
        </div>
        <div>
          <h3 className="mx-2 mt-5 py-3 text-center bg-yellow-600 text-white font-bold text-4xl">
            My Posts
          </h3>
        </div>
        <div className="my-2 mx-2">
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
                              <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900 ">
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
                                <Link
                                  type="button"
                                  className=" text-base font-medium border border-transparent text-gray-500 hover:text-gray-900"
                                  to={"/blogpreview/" + item.id}
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
                      <div className="flex flex-col justify-center items-center">
                        <span className="text-2xl">
                          Click on
                          <Link
                            className="text-2xl text-blue-700"
                            to={"/blog/create"}
                          >
                            {" "}
                            Create Blog{" "}
                          </Link>
                          or Add
                        </span>
                        <span className="text-2xl">
                          Explore Our Latest
                          <Link
                            className="text-2xl text-blue-700"
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
    </>
  );
}
