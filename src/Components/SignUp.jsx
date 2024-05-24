import React, { useState } from "react";
import BreadCrumb from "./CustomHooks/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import FormValidation from "./CustomHooks/FormValiadtions";

export default function SignUp() {
  let [data, setData] = useState({
    fname: "",
    username: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pin: 0,
    phone: "",
    password: "",
    cpassword: "",
    pic: "",
  });
  let [errorMessage, setErrorMessage] = useState({
    fname: "Name Must Required",
    username: "UserName Must Required",
    email: "Email Address Must Required",
    city: "City Must Required",
    address: "Address Must Required",
    state: "State Must Required",
    phone: "Phone Must Required",
    pin: "Pin Must Required",
    password: "Password Must Required",
    cpassword: "Confirm Password Must Required",
  });
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  console.log(data);
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
    setData((old) => {
      return {
        ...old,
        [name]: files[0].name,
      };
    });
  }

  async function postData(e) {
    e.preventDefault();
    if (data.password === data.cpassword) {
      if (!Object.keys(errorMessage).find((x) => errorMessage[x] !== "")) {
        let response = await fetch("http://localhost:8000/user", {
          method: "get",
          headers: {
            "content-type": "application/json",
          },
        });
        response = await response.json();
        let item = response.find(
          (x) => x.username === data.username || x.email === data.email
        );
        if (item) {
          setShow(true);
          setErrorMessage((old) => {
            return {
              ...old,
              username:
                item.username === data.username
                  ? "User Name already Taken!!!"
                  : "",
              email:
                item.email === data.email
                  ? "Email Address already Taken!!!"
                  : "",
            };
          });
        } else {
          item = {
            ...data,
            role: "User",
          };
          let response = await fetch("http://localhost:8000/user", {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(item),
          });
          response = await response.json();
          navigate("/login");
        }
      } else setShow(true);
    } else {
      setShow(true);
      setErrorMessage((old) => {
        return {
          ...old,
          password: "Password and Confirm Password Doesn't Matched!!!",
        };
      });
    }
  }
  return (
    <>
      <BreadCrumb title="SignUp" />
      <div className="font-display">
        <div>
          <h5
            className="text-center mx-auto text-white bg-yellow-700 py-3 rounded-lg"
            onChange={getInputData}
          >
            <strong>Create</strong> a New Account
          </h5>
        </div>
        <div>
          <form onSubmit={postData}>
            <div className="flex flex-row justify-evenly items-center m-2 flex-wrap  ">
              <div className="flex flex-col items-start my-2">
                <div className="flex flex-col my-2">
                  <label>
                    Name<span className="text-red-700">*</span>
                  </label>
                  <input
                    className="p-2 border w-[450px] rounded-lg"
                    onChange={getInputData}
                    type="text"
                    name="fname"
                    placeholder="Enter your Name"
                  />
                  {show ? (
                    <p className="text-red-600 text-bold">
                      {errorMessage.fname}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col my-2">
                  <label>
                    Email id<span className="text-red-700">*</span>
                  </label>
                  <input
                    className="p-2 border w-[450px] rounded-lg"
                    onChange={getInputData}
                    type="email "
                    placeholder="Enter your Email address"
                    name="email"
                  />
                  {show ? (
                    <p className="text-red-600 text-bold">
                      {errorMessage.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col my-2">
                  <label>
                    City<span className="text-red-700">*</span>
                  </label>
                  <input
                    className="p-2 border w-[450px] rounded-lg"
                    onChange={getInputData}
                    placeholder="Enter your City"
                    type="text"
                    name="city"
                  />
                  {show ? (
                    <p className="text-red-600 text-bold">
                      {errorMessage.city}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col my-2">
                  <label>
                    Pincode<span className="text-red-700">*</span>
                  </label>
                  <input
                    className="p-2 border w-[450px] rounded-lg"
                    onChange={getInputData}
                    placeholder="Enter your PinCode"
                    type="text"
                    name="pin"
                  />
                  {show ? (
                    <p className="text-red-600 text-bold">{errorMessage.pin}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col my-2">
                  <label>
                    Password <span className="text-red-700">*</span>
                  </label>

                  <div className="flex items-center ">
                    <input
                      className="p-2 border w-[450px] rounded-lg"
                      onChange={getInputData}
                      type="password"
                      placeholder="Enter your Password"
                      name="password"
                    />
                    <span>
                      <FaEye size={25} className="text-yellow-700 ml-2" />
                    </span>
                  </div>
                  {show ? (
                    <p className="text-red-600 text-bold">
                      {errorMessage.password}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col my-2">
                  <label>
                    Your Pic<span className="text-red-700">*</span>
                  </label>
                  <input
                    className="p-2 border w-[450px] rounded-lg"
                    onChange={getInputFile}
                    type="file"
                    name="pic"
                  />
                </div>{" "}
              </div>
              <div className="flex flex-col items-start my-2">
                <div className="flex flex-col my-2">
                  <label>
                    UserName<span className="text-red-700">*</span>
                  </label>
                  <input
                    className="p-2 border w-[450px] rounded-lg"
                    onChange={getInputData}
                    placeholder="Enter your UserName"
                    type="text"
                    name="username"
                  />
                  {show ? (
                    <p className="text-red-600 text-bold">
                      {errorMessage.username}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col my-2">
                  <label>
                    Address<span className="text-red-700">*</span>
                  </label>
                  <input
                    className="p-2 border w-[450px] rounded-lg"
                    onChange={getInputData}
                    placeholder="Enter your Address"
                    type="text"
                    name="address"
                  />
                  {show ? (
                    <p className="text-red-600 text-bold">
                      {errorMessage.address}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col my-2">
                  <label>
                    State<span className="text-red-700">*</span>
                  </label>
                  <input
                    className="p-2 border w-[450px] rounded-lg"
                    onChange={getInputData}
                    placeholder="Enter your State"
                    type="text"
                    name="state"
                  />
                  {show ? (
                    <p className="text-red-600 text-bold">
                      {errorMessage.state}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col my-2">
                  <label>
                    Phone<span className="text-red-700">*</span>
                  </label>
                  <input
                    className="p-2 border w-[450px] rounded-lg"
                    onChange={getInputData}
                    placeholder="Enter your Phone Number"
                    type="text"
                    name="phone"
                  />
                  {show ? (
                    <p className="text-red-600 text-bold">
                      {errorMessage.phone}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <div className="flex flex-col my-2">
                  <label>
                    Confirm Password <span className="text-red-700">*</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      className="p-2 border w-[450px] rounded-lg"
                      onChange={getInputData}
                      type="password"
                      placeholder="Enter Confirm Password"
                      name="cpassword"
                    />
                    <span>
                      <FaEye size={25} className="text-yellow-700 ml-2" />
                    </span>
                  </div>
                  {show ? (
                    <p className="text-red-600 text-bold">
                      {errorMessage.cpassword}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center">
              <button
                type="submit"
                className="w-[50%] text-white bg-yellow-700 py-3 rounded-xl mt-3 font-bold"
              >
                Submit
              </button>
              <Link to="/login" className="my-2 font-semibold">
                Already Have Account?{" "}
                <span className="text-blue-500 font-bold">Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
