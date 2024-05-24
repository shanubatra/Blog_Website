import React from "react";
import { Link } from "react-router-dom";
const style = {
  backgroundImage: "url('/images/side1.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
export default function BreadCrumb(props) {
  const scrolltoTop = () => {
    window.scrollTo(0,0);
  };
  return (
    <>
      <div style={style}>
        <div className="container mx-auto page-header py-10 font-display">
          <h1 className="text-center text-white text-4xl text-capitalize mt-14">
            {props.title}
          </h1>
          <ol className=" flex justify-center items-center gap-[5px] mt-3 mb-0">
            <li className="">
              <Link
                className=" text-yellow-700 font-bold"
                to="/"
                onClick={scrolltoTop}
              >
                Home
              </Link>
            </li>
            <li className="text-white font-bold">/</li>
            <li className=" active text-white text-capitalize">
              {props.title}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
