import React, { useEffect, useState } from "react";
import BreadCrumb from "../../CustomHooks/BreadCrumb";
import FormValidation from "../../CustomHooks/FormValiadtions";
import { FaArrowCircleLeft } from "react-icons/fa";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  updateCategory,
} from "../../../Store/ActionCreators/CategoryActionCreators";
export default function UpdateCategory() {
  let { id } = useParams();
  let [name, setName] = useState("");
  let [message, setMessage] = useState("");
  let [show, setShow] = useState(false);

  let dispatch = useDispatch();
  let CategoryStateData = useSelector((state) => state.CategoryStateData);
  let navigate = useNavigate();

  function getInputData(e) {
    setMessage(FormValidation(e));
    setShow(false);
    setName(e.target.value);
  }
  function postData(e) {
    e.preventDefault();
    if (message.length === 0) {
      var item = CategoryStateData.find((x) => x.name === name);
      if (item) {
        setShow(true);
        setMessage("Maincategory Already Exist");
      } else {
        dispatch(updateCategory({ id: id, name: name }));
        localStorage.getItem("role") === "Admin"
          ? navigate("/admin/category")
          : navigate("/profile/category");
      }
    } else setShow(true);
  }
  function getAPIData() {
    dispatch(getCategory());
    if (CategoryStateData.length) {
      let item = CategoryStateData.find((x) => x.id === id);
      if (item) setName(item.name);
    }
  }
  useEffect(() => {
    getAPIData();
  }, [CategoryStateData.length]);
  return (
    <>
      <BreadCrumb title="UpdateCategory" />
      <div className="font-display">
        <div className="text-center p-2">
          <h2 className="bg-yellow-600 py-2 text-white font-bold text-2xl rounded-xl">
            Category
            <Link
              to={
                localStorage.getItem("role") === "Admin"
                  ? "/admin/category"
                  : "/profile/category"
              }
              className="float-left ml-4 pt-1 "
            >
              <FaArrowCircleLeft />
            </Link>
          </h2>
        </div>
        <div className="p-2 container px-4">
          <label className="pl-1 font-bold">
            Enter Category Name<span className="text-red-700">*</span> :
          </label>
          <input
            className="w-full border py-2 px-2 rounded-xl mt-1"
            placeholder="Enter Category Name "
            type="text"
            name="name"
            onChange={getInputData}
            value={name}
          />
          {show ? <p className="text-red-600">{message}</p> : ""}
          <button
            className="w-full py-2 px-4 mt-3 bg-yellow-600 text-white rounded-xl font-bold"
            onClick={postData}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
