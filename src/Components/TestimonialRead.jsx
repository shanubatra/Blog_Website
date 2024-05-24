import React, { useEffect, useState } from "react";
import BreadCrumb from "./CustomHooks/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonial } from "../Store/ActionCreators/TestimonialActionCreator";
import { useParams } from "react-router-dom";
import StarRating from "./CustomHooks/StarRating";
import TestimonialSlider from "./TestimonialSlider";

export default function TestimonialRead() {
  let [data, setData] = useState({});

  let { id } = useParams();
  let dispatch = useDispatch();
  let TestimonialStateData = useSelector((state) => state.TestimonialStateData);

  function getApiData() {
    dispatch(getTestimonial());
    let item = TestimonialStateData.find((x) => x.id === id);
    setData({ ...item });
  }
  useEffect(() => {
    getApiData();
  }, [TestimonialStateData.length]);
  return (
    <>
      <BreadCrumb title="Testimonial" />
      <div className="font-display">
        <div className="flex flex-col p-2 min-w-[75%]">
          <div>
            <h2 className="bg-yellow-600 p-2 rounded-xl text-center border-r-2 font-bold text-xl text-white">
              All Users
            </h2>
          </div>
          <div className="my-2 ">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="overflow-hidden ">
                    <table className="min-w-full">
                      <tr className="bg-gray-200">
                        <th
                          scope="col"
                          className="pr-3 pl-4 py-2 text-start text-base border-r-2 border-gray-300 font-bold text-gray-900"
                        >
                          Id
                        </th>
                        <td className="pr-3 pl-4 py-3 whitespace-nowrap font-medium text-base text-gray-900 ">
                          {data.id}
                        </td>
                      </tr>
                      <tr className="bg-gray-300">
                        <th
                          scope="col"
                          className="px-3 py-2 text-start text-base border-r-2 font-bold  text-gray-900"
                        >
                          Pic
                        </th>
                        <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                          <img
                            src={`/images/${data.pic1}`}
                            className="w-[300px]"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="bg-gray-200">
                        <th
                          scope="col"
                          className="px-3 py-2 text-start text-base border-r-2 border-gray-300 font-bold text-gray-900"
                        >
                          Name
                        </th>
                        <td className="px-3 py-3 whitespace-nowrap capitalize font-medium text-base text-gray-900">
                          {data.name}
                        </td>
                      </tr>
                      <tr className="bg-gray-300">
                        <th
                          scope="col"
                          className="px-3 py-2 text-start text-base border-r-2  font-bold text-gray-900"
                        >
                          Profession
                        </th>
                        <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                          {data.profession}
                        </td>
                      </tr>
                      <tr className="bg-gray-200 ">
                        <th
                          scope="col"
                          className="px-3 py-2 text-start text-base border-r-2 border-gray-300 font-bold text-gray-900 "
                        >
                          Rating
                        </th>
                        <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                          <h4 className="max-w-sm  text-yellow-600">
                            <StarRating value={data.star} size={25} />
                          </h4>
                        </td>
                      </tr>
                      <tr className="bg-gray-300">
                        <th
                          scope="col"
                          className="px-3 py-2 text-start text-base border-r-2 font-bold text-gray-900"
                        >
                          Message
                        </th>
                        <td className="px-3 py-3 whitespace-nowrap font-medium text-base text-gray-900">
                          {data.message}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialSlider breadcrumb="false" head="false" />
    </>
  );
}
