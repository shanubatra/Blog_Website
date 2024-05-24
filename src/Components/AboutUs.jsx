import React from "react";
import BreadCrumb from "./CustomHooks/BreadCrumb";
import {
  FaFileAlt,
  FaUserShield,
  FaMobileAlt,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <BreadCrumb title="About Us" />
      <div className="px-2 py-3 font-display">
        <div className="bg-gray-200">
          <div className="container-fluid ">
            <div className="container">
              <div className="flex justify-around flex-col  g-4">
                <div className="col-md-6 col-lg-3">
                  <div className="rounded p-4">
                    <div className=" btn-square flex justify-center rounded-circle text-yellow-600 mb-3 mx-auto">
                      <FaFileAlt size={52} />
                    </div>
                    <div className="text-center">
                      <h5>Free Exploring</h5>
                      <p className="mb-0 capitalize">
                        Free to Upload and Reading Blogs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="text-center rounded p-4">
                    <div className=" btn-square  flex justify-center rounded-circle text-yellow-600 mb-3 mx-auto">
                      <FaUserShield size={52} />
                    </div>
                    <div className="text-center">
                      <h5>Profile Security</h5>
                      <p className="mb-0 capitalize">100% data security </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="text-center rounded p-4">
                    <div className=" btn-square  flex justify-center rounded-circle text-yellow-600 mb-3 mx-auto">
                      <FaMobileAlt size={52} />
                    </div>
                    <div className="text-center">
                      <h5>24/7 Support</h5>
                      <p className="mb-0 capitalize">Support every time fast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
