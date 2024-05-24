import React, { useState } from "react";
import BreadCrumb from "./CustomHooks/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FormValidation from "./CustomHooks/FormValiadtions";

export default function Login() {
  let navigate = useNavigate();
  let [pass, setPass] = useState(true);
  let [data, setData] = useState({
    username: "",
    password: "",
  });
  let [errorMessage, setErrorMessage] = useState({
    username: "user name field is required",
    password: "password field is required",
  });
  let [show, setShow] = useState(false);
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
  async function postData(e) {
    e.preventDefault();
    if (!Object.keys(errorMessage).find((x) => errorMessage[x] !== "")) {
      let response = await fetch("http://localhost:8000/user", {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      });
      response = await response.json();
      let item = response.find(
        (x) =>
          (x.username === data.username || x.email === data.username) &&
          x.password === data.password
      );
      if (item) {
        localStorage.setItem("login", true);
        localStorage.setItem("name", item.fname);
        localStorage.setItem("userid", item.id);
        localStorage.setItem("role", item.role);
        navigate("/");
      } else {
        setShow(true);
        setErrorMessage((old) => {
          return {
            ...old,
            username: "Invalid Username !!!",
            password: "Invalid Password !!!",
          };
        });
      }
    } else setShow(true);
  }
  return (
    <>
      <BreadCrumb title="Login" />
      <div className="font-display">
        <div>
          <h5 className="text-center mx-auto text-white bg-yellow-700 py-3 rounded-lg">
            <strong>Login</strong> to Your Account
          </h5>
        </div>
        <div>
          <form>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col my-2">
                <label>
                  UserName<span className="text-red-700">*</span>
                </label>
                <input
                  className="p-2 border w-[450px] rounded-lg"
                  type="text"
                  name="username"
                  onChange={getInputData}
                  placeholder="Enter your User Name"
                />
                {show ? (
                  <p className="text-red-600 ">{errorMessage.username}</p>
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
                    type={pass ? "password" : "text"}
                    placeholder="Enter your Password"
                    onChange={getInputData}
                    name="password"
                  />
                  <span
                    onClick={() => {
                      setPass(!pass);
                    }}
                  >
                    {pass ? (
                      <FaEyeSlash size={25} className="text-yellow-700 ml-2" />
                    ) : (
                      <FaEye size={25} className="text-yellow-700 ml-2" />
                    )}
                  </span>
                </div>
                {show ? (
                  <p className="text-red-600 ">{errorMessage.password}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className=" flex flex-col items-center">
              <button
                onClick={postData}
                className="w-[50%] text-white bg-yellow-700 py-3 rounded-xl mt-3 font-bold"
              >
                Login
              </button>
              <div className="flex justify-evenly w-full my-3">
                <Link to="/*" className="font-bold text-blue-600">
                  Forget Password?
                </Link>
                <Link to="/signup" className="font-semibold">
                  <span className="text-blue-600 font-bold">New User</span>?
                  Create a Free Account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
