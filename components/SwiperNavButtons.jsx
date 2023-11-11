import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="my_nav mb-5">
      <button
        onClick={() => swiper.slidePrev()}
        className="rounded-full p-2 me-1"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="rounded-full p-2 ms-1"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
};

export default SwiperNavButtons;
