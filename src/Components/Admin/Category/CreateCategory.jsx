import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "../../CustomHooks/BreadCrumb";
import FormValidation from "../../CustomHooks/FormValiadtions";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addCategory,
  getCategory,
} from "../../../Store/ActionCreators/CategoryActionCreators";
export default function CreateCategory() {
  const name = useRef("");
  let [message, setMessage] = useState("Name field must required");
  let [show, setShow] = useState(true);

  let CategoryStateData = useSelector((state) => state.CategoryStateData);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  function getInputData(e) {
    setMessage(FormValidation(e));
    setShow(false);
    name.current = e.target.value;
  }

  function postData(e) {
    e.preventDefault();
    if (message.length === 0) {
      let item = CategoryStateData.find((x) => x.name === name.current);
      if (item) {
        setShow(true);
        setMessage("Category Already Exists");
      } else {
        dispatch(addCategory({ name: name.current }));
        localStorage.getItem("role") === "Admin"
          ? navigate("/admin/category")
          : navigate("/profile/category");
      }
    } else {
      setShow(true);
      setMessage("Something Went Wrong");
    }
  }
  function getAPIData() {
    dispatch(getCategory());
  }
  useEffect(() => {
    getAPIData();
  }, [CategoryStateData.length]);
  return (
    <>
      <BreadCrumb title="CreateCategory" />
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
            onChange={(e) => getInputData(e)}
            name="name"
            placeholder="Enter Category Name "
          />
          {show ? <p className="text-red-600 pl-2 ">{message}</p> : ""}
          <button
            onClick={postData}
            className="w-full py-2 px-4 mt-3 bg-yellow-600 text-white rounded-xl font-bold"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
