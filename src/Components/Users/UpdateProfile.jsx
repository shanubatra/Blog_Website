import React, { useEffect, useState } from "react";
import BreadCrumb from "../CustomHooks/BreadCrumb";
import { useNavigate } from "react-router-dom";
import FormValidation from "../CustomHooks/FormValiadtions";
export default function UpdateProfile() {
  let [data, setData] = useState({});
  let [show, setShow] = useState(false);
  let navigate = useNavigate();
  let [errorMessages, setErrorMessage] = useState({
    fname: "",
    phone: "",
    email: "",
    username: "",
  });

  async function getInputData(e) {
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
    setData((old) => {
      return {
        ...old,
        [name]: files[0].name,
      };
    });
  }
  async function postData(e) {
    e.preventDefault();
    if (!Object.keys(errorMessages).find((x) => errorMessages[x] !== "")) {
      let response = await fetch(
        "http://localhost:8000/user/" + localStorage.getItem("userid"),
        {
          method: "put",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ ...data }),
        }
      );
      if (localStorage.getItem("role") === "Admin") navigate("/admin");
      else navigate("/profile");
    } else setShow(true);
  }
  async function getAPIData() {
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
    if (response) setData({ ...response });
  }

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <>
      <BreadCrumb title="Update Profile" />
      <div>
        <h5 className="font-display bg-yellow-700 text-center py-2 text-white rounded-2xl font-bold">
          Update Your Details
        </h5>
      </div>
      <div className="flex flex-col justify-between items-center font-display">
        <div className="flex gap-4">
          <div className="flex flex-col my-2">
            <label>
              Name<span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border w-[450px] rounded-lg"
              onChange={getInputData}
              value={data.fname}
              type="text"
              name="fname"
              placeholder="Enter your Name"
            />
          </div>
          <div className="flex flex-col my-2">
            <label>
              UserName<span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border w-[450px] rounded-lg"
              onChange={getInputData}
              value={data.username}
              type="text "
              placeholder="Enter your UserName"
              name="username"
            />
            {show ? (
              <p className="text-red-600">{errorMessages.username}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col my-2">
            <label>
              Email id<span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border w-[450px] rounded-lg"
              onChange={getInputData}
              value={data.email}
              type="email"
              placeholder="Enter your Email address"
              name="email"
            />
            {show ? <p className="text-red-600">{errorMessages.email}</p> : ""}
          </div>
          <div className="flex flex-col my-2">
            <label>
              Address<span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border w-[450px] rounded-lg"
              onChange={getInputData}
              value={data.address}
              type="text"
              name="address"
              placeholder="Enter your Address"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col my-2">
            <label>
              City<span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border w-[450px] rounded-lg"
              onChange={getInputData}
              value={data.city}
              type="text"
              name="city"
              placeholder="Enter your City"
            />
          </div>
          <div className="flex flex-col my-2">
            <label>
              State<span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border w-[450px] rounded-lg"
              onChange={getInputData}
              value={data.state}
              type="text"
              placeholder="Enter your State"
              name="state"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col my-2">
            <label>
              Phone No<span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border w-[450px] rounded-lg"
              onChange={getInputData}
              value={data.phone}
              type="text"
              name="phone"
              placeholder="Enter your Phone Number"
            />
            {show ? <p className="text-red-600">{errorMessages.phone}</p> : ""}
          </div>
          <div className="flex flex-col my-2">
            <label>
              Pin Code<span className="text-red-700">*</span>
            </label>
            <input
              className="p-2 border w-[450px] rounded-lg"
              onChange={getInputData}
              value={data.pin}
              type="text"
              placeholder="Enter your Pincode"
              name="pin"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col my-2">
            <label>
              Pic<span className="text-red-400">*</span>{" "}
            </label>
            <input
              className="p-2 border w-[450px] rounded-lg"
              onChange={getInputFile}
              type="file"
              name="pic"
            />
          </div>
        </div>
        <button
          onClick={postData}
          className="bg-yellow-700 font-display text-white p-3 w-[50%] rounded-xl m-2"
        >
          Update Profile
        </button>
      </div>
    </>
  );
}
