import React, { useState } from "react";
import { FaBarsStaggered, FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  let [toggle, setToggle] = useState(true);
  let [drop, setDrop] = useState(false);
  let navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <div className=" h-14 fixed w-[95%] z-50 mx-auto flex justify-around items-center font-display ">
        <div className="flex justify-evenly">
          <Link
            to="/"
            className="text-white z-10 uppercase font-bold text-3xl"
          >
            My Blog
          </Link>
        </div>
        <div className="flex items-center justify-around">
          <ul className="h-full mx-auto px-6 py-8 relative z-10 hidden lg:flex text-xl uppercase font-bold ">
            <li>
              <Link
                to="/"
                className="mr-4 text-white border-b-4 border-transparent hover:border-yellow-900 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allblog"
                className="mr-4 text-white border-b-4 border-transparent hover:border-yellow-900"
              >
                Blogs
              </Link>{" "}
            </li>
            <li>
              <Link
                to="/contact"
                className="mr-4 text-white border-b-4 border-transparent hover:border-yellow-900"
              >
                Contact
              </Link>
            </li>
            {localStorage.getItem("login") ? (
              localStorage.getItem("role") === "User" ? (
                <>
                  <li>
                    <p
                      className="mr-4 text-white border-b-4 border-transparent
                      hover:border-yellow-900 flex items-center gap-2"
                    >
                      Profile
                      <button
                        onClick={() => {
                          setDrop(!drop);
                        }}
                      >
                        <FaUser />
                      </button>
                    </p>
                  </li>
                  <div
                    className={`absolute p-2 bottom-[-75px] right-0 flex flex-col bg-[#ffffff82] ${
                      drop === true ? "" : "hidden"
                    }`}
                  >
                    <Link
                      className="mr-4 text-black border-b-4 border-transparent hover:border-yellow-900"
                      to="/profile"
                    >
                      {localStorage.getItem("name")}
                    </Link>

                    <Link
                      className="mr-4 text-black border-b-4 border-transparent hover:border-yellow-900"
                      to="/testimonial"
                    >
                      Testimonial
                    </Link>

                    <Link
                      className="mr-4 text-black border-b-4 border-transparent hover:border-yellow-900"
                      onClick={logout}
                      to="/"
                    >
                      logout
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <li>
                    <p
                      className="mr-4 text-white border-b-4 border-transparent
                      hover:border-yellow-900 flex items-center gap-2"
                    >
                      Admin
                      <button
                        onClick={() => {
                          setDrop(!drop);
                        }}
                      >
                        <FaUser />
                      </button>
                    </p>
                  </li>
                  <div
                    className={`absolute p-2 bottom-[-75px] right-0 flex flex-col bg-[#ffffff82] ${
                      drop === true ? "" : "hidden"
                    }`}
                  >
                    <Link
                      className="mr-4 text-black border-b-4 border-transparent hover:border-yellow-900"
                      to="/admin"
                    >
                      {localStorage.getItem("name")}
                    </Link>

                    <Link
                      className="mr-4 text-black border-b-4 border-transparent hover:border-yellow-900"
                      to="/testimonial"
                    >
                      Testimonial
                    </Link>

                    <Link
                      className="mr-4 text-black border-b-4 border-transparent hover:border-yellow-900"
                      onClick={logout}
                      to="/"
                    >
                      Logout
                    </Link>
                  </div>
                </>
              )
            ) : (
              <li>
                <Link
                  className="mr-4 text-white border-b-4 border-transparent m-0 hover:border-yellow-900"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>

          <div className="absolute right-0 w-[94%] h-full rounded-bl-full rounded-tr-full bg-yellow-700  bg-opacity-"></div>
        </div>
        <div className="flex items-center justify-end lg:hidden z-50 ">
          {toggle ? (
            ""
          ) : (
            <div className="fixed right-0 bottom-0 w-[60%] h-full bg-white z-50-* text-yellow-900">
              <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-lg uppercase font-bold tracking-widest space-y-6">
                <button
                  className="absolute top-0 left-0 mt-8 ml-6 "
                  onClick={() => setToggle(true)}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
                <Link
                  to="/"
                  className="ml-1 text-white border-b-4 border-transparent hover:border-yellow-900"
                >
                  Home
                </Link>
                <Link
                  to="/allblog"
                  className="ml-1 text-white border-b-4 border-transparent hover:border-yellow-900"
                >
                  Blogs
                </Link>{" "}
                <Link
                  to="/contact"
                  className="ml-1 text-white border-b-4 border-transparent hover:border-yellow-900"
                >
                  Contact
                </Link>
                <Link
                  to="/testimonial"
                  className="ml-1 text-white border-b-4 border-transparent hover:border-yellow-900"
                >
                  Testimonial
                </Link>{" "}
                {localStorage.getItem("login") ? (
                  localStorage.getItem("role") === "User" ? (
                    <>
                      <Link
                        className="ml-1 text-white border-b-4 border-transparent hover:border-yellow-900"
                        to="/profile"
                      >
                        Profile
                      </Link>
                      <Link
                        className="ml-1 text-white border-b-4 border-transparent hover:border-yellow-900"
                        onClick={logout}
                        to="/"
                      >
                        logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        className="ml-1 text-white border-b-4 border-transparent hover:border-yellow-900"
                        to="/admin"
                      >
                        Admin
                      </Link>
                      <Link
                        className="ml-1 text-white border-b-4 border-transparent hover:border-yellow-900"
                        onClick={logout}
                        to="/"
                      >
                        Logout
                      </Link>
                    </>
                  )
                ) : (
                  <Link
                    className="ml-1 text-white border-b-4 border-transparent m-0 hover:border-yellow-900"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </div>
              <div className="absolute inset-0 w-full h-full bg-yellow-700 bg-opacity-50 "></div>
            </div>
          )}
          <button>
            <FaBarsStaggered 
              className="w-7 h-8 text-white"
              onClick={() => setToggle(false)}
            />
          </button>
        </div>
      </div>
    </>
  );
}
