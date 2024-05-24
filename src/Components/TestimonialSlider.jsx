import React, { useEffect, useState } from "react";
import Breadcrumb from "./CustomHooks/BreadCrumb";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonial } from "../Store/ActionCreators/TestimonialActionCreator";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import StarRating from "./CustomHooks/StarRating";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function TestimonialSlider(props) {
  let options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ["Prev", "Next"],

    responsive: {
      0: {
        items: 1,
      },
      720: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1920: {
        items: 4,
      },
    },
  };
  let dispatch = useDispatch();
  let TestimonialStateData = useSelector((state) => state.TestimonialStateData);
  let [data, setData] = useState([]);

  function getApiData() {
    dispatch(getTestimonial());
    if (TestimonialStateData) setData(TestimonialStateData);
  }

  useEffect(() => {
    getApiData();
  }, [TestimonialStateData.length]);
  return (
    <>
      {props.breadcrumb === "false" ? "" : <Breadcrumb title="Testimonials" />}
      {props.head === "false" ? (
        ""
      ) : (
        <div className="font-display">
          <h1 className="text-5xl text-yellow-600 font-display text-center mt-4 font-bold">
            Our Testimonials
          </h1>
          <h1 className=" text-4xl text-yellow-600 font-display text-center mt-4 font-bold">
            Our Users Saying!
          </h1>
        </div>
      )}
      <div className="my-10 font-display">
        <OwlCarousel className="owl-theme" {...options}>
          {data.map((item, index) => {
            return (
              <div key={index} className="bg-gray-50 p-6">
                <div className="flex flex-row gap-4 items-center ">
                  <Link to={`/testimonial/${item.id}`} className="w-[90px]">
                    {item.pic1 ? (
                      <img
                        src={`/images/${item.pic1}`}
                        className=" w-full h-[90px] rounded-full object-cover border-2 p-1"
                        alt="img"
                      />
                    ) : (
                      <Skeleton
                        baseColor="#d6d6d6"
                        highlightColor="#f5f5f5c9"
                        height={10}
                      />
                    )}
                  </Link>
                  <div className="flex flex-col">
                    <h2 className="mt-3 text-3xl font-display capitalize text-black leading-tight max-w-sm">
                      {item.name || (
                        <Skeleton
                          baseColor="#d6d6d6"
                          highlightColor="#f5f5f5c9"
                          containerClassName="flex-1"
                        />
                      )}{" "}
                    </h2>
                    <h4 className="text-2xl  font-display capitalize text-black leading-tight max-w-sm">
                      {item.profession || (
                        <Skeleton
                          baseColor="#d6d6d6"
                          highlightColor="#f5f5f5c9"
                          containerClassName="flex-1"
                        />
                      )}{" "}
                    </h4>
                    <h4 className=" mt-3 text-yellow-600 font-display max-w-sm">
                      {item.star ? (
                        <StarRating value={item.star} size={25} />
                      ) : (
                        <Skeleton
                          baseColor="#d6d6d6"
                          highlightColor="#f5f5f5c9"
                          containerClassName="flex-1"
                        />
                      )}
                    </h4>
                  </div>
                </div>

                <div>
                  <p className="mt-4 max-w-md text-xl font-display">
                    {item.message ? (
                      item.message.slice(0, 100)
                    ) : (
                      <Skeleton
                        baseColor="#d6d6d6"
                        highlightColor="#f5f5f5c9"
                      />
                    )}{" "}
                  </p>
                  <a
                    href={`/testimonial/${item.id}`}
                    className="flex items-center mt-6 font-display uppercase text-sm text-black font-semibold"
                  >
                    Read Review
                    <FaArrowCircleRight
                      className="ml-2 text-yellow-600 font-display"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </>
  );
}
