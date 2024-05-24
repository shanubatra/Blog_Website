import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BlogSlider({ data, title }) {
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
  return (
    <>
      <div className="font-display">
        <div>
          <h1 className="text-6xl text-yellow-600 text-center my-4 font-bold mx-0">
            {title}
          </h1>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          {data.map((item, index) => {
            return (
              <div key={index} className="border rounded-xl">
                <Link to={`/allblog`}>
                  {item.pic ? (
                    <img
                      alt="img"
                      src={`/images/${item.pic}`}
                      className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover rounded-t-xl "
                    />
                  ) : (
                    <Skeleton
                      baseColor="#d6d6d6"
                      highlightColor="#f5f5f5c9"
                      width={400}
                      height={250}
                    />
                  )}
                </Link>

                <div className="bg-gray-50 p-8 rounded-b-xl">
                  <div className="text-xs text-gray-600 uppercase font-semibold">
                    Published on-
                    {item.date || (
                      <Skeleton
                        baseColor="#d6d6d6"
                        highlightColor="#f5f5f5c9"
                      />
                    )}
                  </div>
                  <h2 className="mt-3 text-3xl   text-black leading-tight max-w-sm">
                    {item.topic || (
                      <Skeleton
                        baseColor="#d6d6d6"
                        highlightColor="#f5f5f5c9"
                      />
                    )}{" "}
                  </h2>
                  <h4 className=" text-xl mb-6  text-black leading-tight max-w-sm">
                    {item.category || (
                      <Skeleton
                        baseColor="#d6d6d6"
                        highlightColor="#f5f5f5c9"
                      />
                    )}{" "}
                  </h4>
                  <p className="mt-4 max-w-md">
                    {item.content ? (
                      item.content.slice(0, 150) + "..."
                    ) : (
                      <Skeleton
                        baseColor="#d6d6d6"
                        highlightColor="#f5f5f5c9"
                        count={4}
                      />
                    )}
                  </p>
                  <Link
                    to={`/allblog`}
                    className="flex items-center  mt-6  uppercase text-sm text-black font-semibold"
                  >
                    Read article
                    <FaArrowCircleRight className="ml-2 text-yellow-600" />
                  </Link>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </>
  );
}
