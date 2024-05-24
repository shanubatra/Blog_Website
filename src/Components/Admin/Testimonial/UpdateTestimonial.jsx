import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import BreadCrumb from "../../CustomHooks/BreadCrumb";
import {
  getTestimonial,
  updateTestimonial,
} from "../../../Store/ActionCreators/TestimonialActionCreator";
import FormValidation from "../../CustomHooks/FormValiadtions";

export default function UpdateTestimonial() {
  let { id } = useParams();
  let [data, setData] = useState({
    name: "",
    pic1: "",
    star: 0,
    profession: "",
    message: "",
  });
  let [errorMessage, setErrorMessage] = useState({
    name: "Name Field Must Required",
    profession: "Profession Field Must Required",
    message: "Message Field Must Required",
  });
  let [show, setShow] = useState(false);

  let TestimonialStateData = useSelector((state) => state.TestimonialStateData);

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
        name: data.name,
        pic1: data.pic1,
        star: data.star,
        profession: data.profession,
        message: data.message,
      };
      dispatch(updateTestimonial({ id: id, ...item }));
      localStorage.getItem("role") === "Admin"
        ? navigate("/admin/Testimonial")
        : navigate("/profile/Testimonial");
    } else {
      setShow(true);
      setErrorMessage("Something Went Wrong");
    }
  }

  function getAPIData() {
    dispatch(getTestimonial());
  }
  useEffect(() => {
    getAPIData();
    if (TestimonialStateData.length) {
      let item = TestimonialStateData.find((x) => x.id === id);
      if (item) setData(item);
    }
  }, [TestimonialStateData.length]);
  return (
    <>
      {" "}
      <BreadCrumb title="CreateTestimonial" />
      <div className="font-display">
        <div className="text-center p-2">
          <h2 className="bg-yellow-600 py-2 text-white font-bold text-2xl rounded-xl">
            Testimonial
            <Link to={"/admin/Testimonial"} className="float-left ml-4 pt-1 ">
              <FaArrowCircleLeft />
            </Link>
          </h2>
        </div>
        <div className="p-2 flex flex-col flex-wrap px-4">
          <div className="flex-row flex flex-wrap justify-between my-2">
            <div className="min-w-[45%]">
              <label className="pl-1 font-bold">
                Enter Your Name <span className="text-red-700">*</span> :
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                value={data.name}
                onChange={(e) => getInputData(e)}
                name="name"
                type="text"
                placeholder="Enter Enter name "
              />
              {show ? <p className="text-red-600">{errorMessage.name}</p> : ""}
            </div>

            <div className="min-w-[45%]">
              <label className="pl-1 font-bold">
                Enter Your profession<span className="text-red-700">*</span> :
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                value={data.profession}
                onChange={(e) => getInputData(e)}
                name="profession"
                placeholder="Enter Your Profession  "
              />{" "}
              {show ? (
                <p className="text-red-600">{errorMessage.profession}</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex-row flex flex-wrap justify-between my-2 ">
            <div className="min-w-[45%]">
              <label className="pl-1 font-bold">
                Enter Star Rating<span className="text-red-700">*</span> :
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                value={data.star}
                onChange={(e) => getInputData(e)}
                name="star"
                type="number"
                placeholder="Enter Star Rating"
              />
            </div>
            <div className="min-w-[45%]">
              <label className="pl-1 font-bold">
                Enter Your Pic
                <span className="text-red-700">*</span> :
              </label>
              <input
                className="w-full border py-2 px-2 rounded-xl mt-1"
                onChange={(e) => getInputFile(e)}
                name="pic1"
                type="file"
                placeholder="Enter Email Address "
              />
            </div>
            <div className="min-w-[45%]">
              <label className="pl-1 font-bold">
                Enter Your Message<span className="text-red-700">*</span> :
              </label>
              <textarea
                className="w-full border py-2 px-2 rounded-xl mt-1"
                value={data.message}
                onChange={(e) => getInputData(e)}
                name="message"
                placeholder="Enter Your Message"
                rows={3}
              ></textarea>
              {show ? (
                <p className="text-red-600">{errorMessage.message}</p>
              ) : (
                ""
              )}
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
