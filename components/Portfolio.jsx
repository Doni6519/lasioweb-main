"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// import required modules
import { A11y, Grid, Navigation } from "swiper/modules";

import SwiperNavButtons from "@/components/SwiperNavButtons";

export default function Portfolio({ projects }) {
  return (
    <section className="our_portfolio py-5 text-white">
      <h1 className="text-center mt-10 mb-8 text-xl font-bold md:text-4xl">
        Our Portfolio
      </h1>

      <div className="w-5/6 m-auto">
        <Swiper
          slidesPerView="auto"
          // spaceBetween={30}
          loop={true}
          modules={[Grid, A11y]}
          className="mySwiper"
        >
          <SwiperNavButtons />
          {projects.map((project) => (
            <SwiperSlide className="h-56 max-w-xs rounded-lg me-3">
              <div
                // controls-carousel
                id={project.category}
                key={project._id}
                className={project.category + " all relative "}
                data-carousel="static"
              >
                <div className="relative h-56 overflow-hidden rounded-lg ">
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    <Link href={`/our_work/${project.slug}`}>
                      <Image
                        width={1000}
                        height={1000}
                        src={project.image}
                        className="absolute block w-full h-full object-cover "
                        alt=""
                      />
                    </Link>
                  </div>
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item="active"
                  >
                    <Link href={`/our_work/${project.slug}`}>
                      <Image
                        width={1000}
                        height={1000}
                        src={project.secondImage}
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                        alt=""
                      />{" "}
                    </Link>
                  </div>
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    <Link href={`/our_work/${project.slug}`}>
                      <Image
                        width={1000}
                        height={1000}
                        src={project.thirdImage}
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                        alt=""
                      />{" "}
                    </Link>
                  </div>
                </div>
                <button
                  type="button"
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
