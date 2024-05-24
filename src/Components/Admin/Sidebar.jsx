import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaStar,
  FaListAlt,
  FaEnvelope,
  FaMobile,
} from "react-icons/fa";
export default function Sidebar() {
  return (
    <>
      <div className="font-display w-full">
        <ul className="flex flex-col border rounded-2xl">
          <li className="border-b-2 border-t-0">
            <Link to="/admin" className="flex items-center" aria-current="true">
              <FaHome className="mx-2 my-2 text-yellow-700" size={30} />
              <span className="float-end text-gray-950 ">Admin Home</span>
            </Link>
          </li>
          <li className="border-b-2">
            <Link to="/admin/user" className="flex items-center">
              <FaUser className="mx-2 my-2 text-yellow-700" size={30} />{" "}
              <span className="float-end text-gray-950">Users</span>
            </Link>
          </li>
          <li className="border-b-2">
            <Link to="/admin/category" className="flex items-center">
              <FaListAlt className="mx-2 my-2 text-yellow-700" size={30} />
              <span className="float-end text-gray-950">Category</span>
            </Link>
          </li>

          <li className="border-b-2">
            {" "}
            <Link to="/admin/blog" className="flex items-center">
              <FaListAlt className="mx-2 my-2 text-yellow-700" size={30} />
              <span className="float-end text-gray-950">Blogs</span>
            </Link>
          </li>
          <li className="border-b-2">
            {" "}
            <Link to="/admin/testimonial" className="flex items-center">
              <FaStar className="mx-2 my-2 text-yellow-700" size={30} />
              <span className="float-end text-gray-950">Testimonials</span>
            </Link>
          </li>

          <li className="border-b-2 ">
            {" "}
            <Link to="/admin/contactus" className="flex items-center">
              <FaMobile className="mx-2 my-2 text-yellow-700" size={30} />
              <span className="float-end text-gray-950">ContcatUs</span>
            </Link>
          </li>
          <li className="">
            <Link to="/admin/newsletters" className="flex items-center ">
              <FaEnvelope className="mx-2 my-2 text-yellow-700" size={30} />
              <span className="float-end text-gray-950">Newsletters</span>
            </Link>
          </li>
        </ul>{" "}
      </div>
    </>
  );
}
