import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import BreadCrumb from "../../CustomHooks/BreadCrumb";
import { getCategory } from "../../../Store/ActionCreators/CategoryActionCreators";

import {
  getBlog,
  updateBlog,
} from "../../../Store/ActionCreators/BlogActionCreator";
import FormValidation from "../../CustomHooks/FormValiadtions";

export default function UpdateBlog() {
  let { id } = useParams();
  let [data, setData] = useState({
    topic: "",
    category: "",
    name: "",
    phone: "",
    desg: "",
    link1: "",
    link2: "",
    bio: "",
    content: "",
    pic: "",
  });
  let [errorMessage, setErrorMessage] = useState({
    topic: "Topic Field Must Required",
    name: "Name Field Must Required",
    phone: "Phone Number Field Must Required",
    desg: "Desgination Field Must Required",
    content: "Content Field Must Required",
    pic: "Pic Field Must Required",
  });
  let [show, setShow] = useState(false);

  let CategoryStateData = useSelector((state) => state.CategoryStateData);
  let BlogStateData = useSelector((state) => state.BlogStateData);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  function getInputData(e) {
    let { name, value } = e.target;

    setErrorMessage((old) => {
      return {
        ...old,
        [name]: FormValidation(e),
      };
    });
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }

  function getInputFile(e) {
    let { name, files } = e.target;
    if (name === "pic") {
      setErrorMessage((old) => {
        return {
          ...old,
          [name]: "",
        };
      });
    }
    setData((old) => {
      return {
        ...old,
        [name]: files[0].name,
      };
    });
  }

  function postData(e) {
    e.preventDefault();
    if (Object.keys(errorMessage).find((x) => errorMessage[x] !== " ")) {
      let item = {
        topic: data.topic,
        category: data.category,
        name: data.name,
        phone: data.phone,
        desg: data.desg,
        link1: data.link1,
        link2: data.link2,
        bio: data.bio,
        content: data.content,
        pic: data.pic,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        userid: localStorage.getItem("userid"),
      };
      dispatch(updateBlog({ id: id, ...item }));
      localStorage.getItem("role") === "Admin"
        ? navigate("/admin/blog")
        : navigate("/profile/blog");
    } else {
      setShow(true);
      setErrorMessage("Something Went Wrong");
    }
  }

  function getAPIData() {
    dispatch(getCategory());
    dispatch(getBlog());
  }
  useEffect(() => {
    getAPIData();
    if (BlogStateData.length) {
      let item = BlogStateData.find((x) => x.id === id);
      if (item) setData(item);
    }
  }, [CategoryStateData.length, BlogStateData.length]);
  return (
    <>
      {" "}
      <BreadCrumb title="UpadteBlog" />
      <div className="font-display">
        <div className="text-center p-2">
          <h2 className="bg-yellow-600 py-2 text-white font-bold text-2xl rounded-xl">
            Update Blog
            <Link
              to={
                localStorage.getItem("role") === "Admin"
                  ? "/admin/blog"
                  : "/profile/blog"
              }
              className="float-left ml-4 pt-1 "
            >
              <FaArrowCircleLeft />
            </Link>
          </h2>
        </div>
        <div className="p-2 flex flex-col flex-wrap px-4">
          <div className="flex-row flex flex-wrap justify-between my-3">
            <div className="min-w-[45%] my-3">
              <label className="pl-1 font-bold">
                Enter Blog Topic<span className="text-red-700">*</span> :
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                onChange={(e) => getInputData(e)}
                value={data.topic}
                name="topic"
                placeholder="Enter Blog topic "
              />
              {show ? <p className="text-red-600">{errorMessage.topic}</p> : ""}
            </div>

            <div className="min-w-[45%] my-3">
              <label className="pl-1 font-bold">
                Enter Author Name<span className="text-red-700">*</span> :
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                onChange={(e) => getInputData(e)}
                value={data.name}
                name="name"
                placeholder="Enter Auhtor Name "
              />{" "}
              {show ? <p className="text-red-600">{errorMessage.name}</p> : ""}
            </div>
            <div className="min-w-[45%] my-3">
              <label className="pl-1 font-bold">
                Enter Author Phone No.<span className="text-red-700">*</span> :
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                onChange={(e) => getInputData(e)}
                value={data.phone}
                name="phone"
                placeholder="Enter Author Phone Number "
              />
              {show ? <p className="text-red-600">{errorMessage.phone}</p> : ""}
            </div>
            <div className="min-w-[45%] my-3">
              <label className="pl-1 font-bold">
                Enter Author Designation<span className="text-red-700">*</span>{" "}
                :
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                onChange={(e) => getInputData(e)}
                value={data.desg}
                name="desg"
                placeholder="Enter Author Designation "
              />
              {show ? <p className="text-red-600">{errorMessage.desg}</p> : ""}
            </div>
            <div className="min-w-[45%] my-3">
              <label className="pl-1 font-bold">
                Enter Social Media Link(optional):
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                onChange={(e) => getInputData(e)}
                value={data.link1}
                name="link1"
                placeholder="Enter social link "
              />
            </div>
            <div className="min-w-[45%] my-3">
              <label className="pl-1 font-bold">
                Enter Author Website(optional) :
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                onChange={(e) => getInputData(e)}
                value={data.link2}
                name="link2"
                placeholder="Enter Website "
              />
            </div>
            <div className="min-w-[45%] my-3">
              <label className="pl-1 font-bold">
                Enter Pic<span className="text-red-700">*</span> :
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                onChange={(e) => getInputFile(e)}
                name="pic"
                type="file"
              />
              {show ? (
                <p className="text-red-600 pl-2">{errorMessage.pic}</p>
              ) : (
                ""
              )}{" "}
            </div>
            <div className="min-w-[45%] my-3 flex flex-col ">
              <label className="pl-1 font-bold">
                Enter Blog Category<span className="text-red-700">*</span> :
              </label>
              <select
                name="category"
                onChange={getInputData}
                className="p-3 border-2 rounded-2xl ml-1"
                value={data.category}
              >
                {CategoryStateData.length &&
                  CategoryStateData.map((item, index) => {
                    return <option key={index}>{item.name}</option>;
                  })}
              </select>
            </div>
            <div className="w-[45%] my-3">
              <label className="pl-1 font-bold">
                Enter Author Bio<span className="text-red-700">*</span> :
              </label>
              <textarea
                className="w-full border py-2 px-2 rounded-xl mt-1"
                onChange={(e) => getInputData(e)}
                value={data.bio}
                name="bio"
                placeholder="Enter author Bio"
                rows={3}
              ></textarea>
            </div>
            <div className="w-[50%] my-3">
              <label className="pl-1 font-bold">
                Blog Content<span className="text-red-700">*</span> :
              </label>
              <textarea
                className="w-full border py-2 px-2 rounded-xl mt-1"
                onChange={(e) => getInputData(e)}
                value={data.content}
                name="content"
                rows={10}
                placeholder="Enter Blog Content"
              />
            </div>
          </div>

          <div className="flex-row flex flex-wrap justify-around ">
            <button
              onClick={postData}
              className="w-[75%]  py-2 px-4 mt-3 bg-yellow-600 text-white rounded-xl font-bold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
