import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMobile,
} from "react-icons/fa";
import { addNewsletter } from "../Store/ActionCreators/NewsletterctionCreator";
import { Link } from "react-router-dom";
export default function Footer() {
  let [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  let dispatch = useDispatch();
  function postData(e) {
    e.preventDefault();
    let item = {
      email: email,
      date: new Date().toDateString(),
    };
    if (item) {
      dispatch(addNewsletter(item));
      setMessage(true);
    }
  }

  return (
    <>
      <div className="bg-gray-900 text-white text-opacity-40 font-semibold text-xs tracking-widest bg-opacity-80 px-12 font-display">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left py-12">
          <div>
            <div className="text-white text-4xl  mb-3 uppercase">My Blog</div>
            <div className="text-white">
              {message ? (
                <p className="text-green-500 uppercase font-bold my-3 text-xl ">
                  Thanks for subscription !!!
                </p>
              ) : (
                <form onSubmit={(e) => postData(e)}>
                  <div className="flex items-baseline flex-wrap ">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter Your Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-2 max-w-full border-none text-sm p-3 w-[100%] bg-gray-100 text-gray-700 rounded-2xl"
                    />
                    <button
                      type="submit"
                      className="inline-block border-2 border-white font-light text-white text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white mt-2 w-[100%] rounded-2xl"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div>
            <div className=" text-white uppercase text-xl text-center tracking-widest mb-4 ">
              Bottom Menu
            </div>
            <Link to="/" className="block text-center  hover:text-white mb-4 ">
              Home
            </Link>
            <Link
              to="/blogs"
              className="block text-center  hover:text-white mb-4"
            >
              Blogs
            </Link>
            <Link
              to="/profile"
              className="block text-center  hover:text-white mb-4"
            >
              Profile
            </Link>
            <Link
              to="/aboutus"
              className="block text-center  hover:text-white mb-4"
            >
              About
            </Link>
            <Link to="/contact" className="block text-center  hover:text-white">
              Contact
            </Link>
          </div>
          <div>
            <div className=" text-white uppercase text-xl tracking-widest text-center mb-4">
              Quick Links
            </div>
            <a href="/" className="block text-center  hover:text-white  mb-4">
              Privacy policy
            </a>
            <a href="/" className="block text-center  hover:text-white mb-4">
              Terms & Conditions
            </a>
            <a className="block text-center  hover:text-white mb-4" href="/">
              Refund Policy
            </a>
            <a href="/" className="block text-center  hover:text-white mb-4">
              FAQ
            </a>
          </div>
          <div>
            <div className=" text-white uppercase text-xl tracking-widest mb-2 text-center">
              Social Links
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223442.89932174358!2d76.91904309279933!3d28.948964500892817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x9efbd3cd589b645e!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709102378870!5m2!1sen!2sin"
              className=" items-center gap-2 flex justify-center hover:text-white"
            >
              <FaMapMarkerAlt className="w-4 mb-1 h-7" />
              <p>Sonipat,Haryana</p>
            </a>
            <a
              href="mailto:shanubatra128@gmail.com"
              rel="noreferrer"
              target="_blank"
              className=" items-center gap-2 flex justify-center hover:text-white"
            >
              <FaEnvelope className="w-4 mb-1 h-7" />
              <p>shanubatra128@gmail.com</p>
            </a>
            <a
              href="tel:+91-9138363536"
              rel="noreferrer"
              target="_blank"
              className=" items-center gap-2 flex justify-center hover:text-white"
            >
              <FaMobile className="w-4 mb-1 h-7" />
              <p>9138363536</p>
            </a>
            <a
              href="https://wa.me/91-9138363536"
              rel="noreferrer"
              target="_blank"
              className=" items-center gap-2 flex justify-center  hover:text-white"
            >
              <FaWhatsapp className="w-4 mb-1 h-7 " />
              <p>9138363536</p>
            </a>
          </div>
        </div>
        <div className="text-sm lg:text-base text-center font-heading font-light tracking-widest uppercase text-white opacity-75 pb-10">
          ©2024 DESIGN BY SHANU BATRA
        </div>
      </div>
    </>
  );
}
