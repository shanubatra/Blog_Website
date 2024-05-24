import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Store/ActionCreators/ContactActionCreator";
import {
  FaMobile,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import BreadCrumb from "./CustomHooks/BreadCrumb";
export default function Contact() {
  let dispatch = useDispatch();
  let [message, setMessage] = useState(false);
  let [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    desg: "",
  });
  function getData(e) {
    let { name, value } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  function postData(e) {
    e.preventDefault();
    let item = {
      ...data,
      date: new Date().toLocaleDateString(),
    };
    if (item) {
      dispatch(addContact(item));
    }
    setMessage(true);
  }

  return (
    <>
      <BreadCrumb title="Contact US" />
      <div className="font-display">
        <div className="text-center py-10 px-6 ">
          <h1 className=" font-bold text-5xl mb-4 mt-12h">Get in touch</h1>
          <p className="max-w-lg mx-auto"></p>
        </div>

        <div className="container mx-auto px-6 mb-12 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <form onSubmit={postData}>
                {message ? (
                  <p className="text-center text-2xl font-semibold text-green-600">
                    Thank You For your FeedBack{" "}
                  </p>
                ) : (
                  ""
                )}
                <div>
                  <label className="block text-base tracking-tight text-gray-600">
                    Name
                  </label>
                  <input
                    name="name"
                    onChange={(e) => {
                      getData(e);
                    }}
                    type="text"
                    placeholder="Enter your Name"
                    required
                    className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-base tracking-tight text-gray-600">
                    Email address
                  </label>
                  <input
                    name="email"
                    onChange={(e) => {
                      getData(e);
                    }}
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-base tracking-tight text-gray-600">
                    Designation
                  </label>
                  <input
                    name="desg"
                    onChange={(e) => {
                      getData(e);
                    }}
                    type="text"
                    placeholder="Enter your Designation"
                    required
                    className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-base tracking-tight text-gray-600">
                    Message
                  </label>
                  <textarea
                    onChange={(e) => {
                      getData(e);
                    }}
                    name="message"
                    placeholder="Enter Your message"
                    rows={5}
                    required
                    className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-block border-2 border-yellow-800 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 rounded-xl hover:bg-yellow-800 hover:text-white mt-6 w-full"
                >
                  Send message
                </button>
              </form>
            </div>
            <div>
              <div className="flex items-baseline p-4 rounded  bg-white ">
                <FaMapMarkerAlt className="w-8 h-4 mr-4 mt-3 text-yellow-800" />
                <div>
                  <h4 className="text-2xl font-bold text-yellow-800">
                    Address:
                  </h4>
                  <a href="/">123 Street New York.USA</a>
                </div>
              </div>
              <div className="flex align-baseline p-4 rounded bg-white  ">
                <FaEnvelope className="w-8 h-4 mr-4 mt-3 text-yellow-800 " />
                <div>
                  <h4 className="text-2xl font-bold text-yellow-800">
                    Mail Us:
                  </h4>
                  <a href="mailto:shanubatra128@gmail.com">
                    shanubatra128@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex align-baseline p-4 rounded bg-white">
                <FaMobile className="w-8 h-4 mr-4 mt-3 text-yellow-800 " />
                <div>
                  <h4 className="text-2xl font-bold text-yellow-800">
                    Telephone:
                  </h4>
                  <a href="tel:9138363536">9138363536</a>
                </div>
              </div>
              <div className="flex align-baseline  p-4 rounded bg-white">
                <FaWhatsapp className="w-8 h-4 mr-4 mt-3 text-yellow-800 " />
                <div>
                  <h4 className="text-2xl font-bold text-yellow-800">
                    Whatsapp:
                  </h4>
                  <a href="tel:9138363536">9138363536</a>
                </div>
              </div>
            </div>
          </div>
          <div className="container  mt-10 max-w-[900px] grid grid-cols-1 mx-auto">
            <div className="mapouter w-full">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="400"
                  id="gmap_canvas"
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223442.89932174358!2d76.91904309279933!3d28.948964500892817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x9efbd3cd589b645e!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709102378870!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
