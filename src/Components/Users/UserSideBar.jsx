import React from "react";
import { FaHome, FaListAlt ,FaHeart} from "react-icons/fa";
import { Link } from "react-router-dom";


export default function UserSideBar() {
  return (
    <>
      <div className="font-display">
        <ul className="flex flex-col border rounded-2xl  mt-10">
          <li>
            <Link
              to="/profile"
              className="flex items-center border-b-2"
              aria-current="true"
            >
              <FaHome className="mx-4 my-2 text-yellow-700" size={30} />
              <span className="float-end text-gray-950 ">Profile</span>
            </Link>
          </li>

          <li>
            <Link
              to="/profile/category"
              className="flex items-center border-b-2"
            >
              <FaListAlt className="mx-4 my-2 text-yellow-700" size={30} />
              <span className="float-end text-gray-950">Category</span>
            </Link>
          </li>

          <li>
            <Link to="/profile/blog" className="flex items-center border-b-2">
              <FaListAlt className="mx-4 my-2 text-yellow-700" size={30} />
              <span className="float-end text-gray-950">My Blogs</span>
            </Link>
          </li>

          <li>
            <Link to="/profile/fav" className="flex items-center ">
              <FaHeart className="mx-4 my-2 text-yellow-700" size={30} />
              <span className="float-end text-gray-950">My Favourites</span>
            </Link>
          </li>
        </ul>{" "}
      </div>
    </>
  );
}
