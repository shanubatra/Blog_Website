import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <>
      <div className="font-display">
        <div className="text-center py-12 mb-12 px-6">
          <FaExclamationTriangle className="text-9xl text-red-600 mx-auto mb-3 " />
          <h1 className="text-3xl lg:text-4xl mb-6 font-display text-black leading-tight">
            Sorry, this page doesn't exist
          </h1>
          <p className="max-w-lg mx-auto">
            We are sorry, but the page you are looking for cannot be found.
          </p>
          <p className="max-w-lg mx-auto">
            Click Here to{" "}
            <Link to="/" className="text-blue-600">
              Reload
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
