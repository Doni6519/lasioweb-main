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
                <div className="relative h-56 overflow-hidden rounded-lg ">
                  <div
                    className="duration-700 ease-in-out"
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
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
