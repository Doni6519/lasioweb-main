"use client";

import {  getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
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

export default async function Home() {
  const projects = await getProjects();
  // const swiper = useSwiper();
  return (
    <div className="text-sm">
      <div id="hero_home" className="hero">
        <div id="hero_text">
          <h1 className="font-bold text-4xl">We craft web experiences</h1>
          <p className="text-2xl mt-3">
            <span className="font-bold">that</span> thrives businesses
          </p>
          <button
            type="button"
            class="bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-black font-bold mt-10 rounded-full text-sm px-8 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>

      <section className="block md:flex w-5/6 first_item_hero">
        <div className="mt-10">
          <h1 className="text-sm md:text-4xl text-center md:text-left font-bold md:text-center lg:text-4xl md:w-4/5">
            WE'RE A WEB DESIGN FIRM AND DIGITAL AGENCY
          </h1>
          <div className="md:w-5/6 mt-7 text-center md:text-left">
            <p>
              LasioWeb is a global full service digital agency with capabilities
              across web design & development, marketing and branding. We work
              closely with our clients - envisioning their ideas and bringing it
              to life using various digital and creative methods.
            </p>
            <p className="hidden md:block">
              Some of our most common services includes:
            </p>
            <p className="mt-5 flex m-auto w-fit">
              <span className="me-1 font-bold text-sm">LEARN MORE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#000"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </p>
          </div>
        </div>
        <div>
          <ul className="list-none  mt-10 text-lg text-center common_services hidden md:block">
            <li className="hover:text-blue-900">
              <a href="/">e-commerce</a>
            </li>
            <li className="hover:text-blue-900 mt-2">
              <a href="/">corporate</a>
            </li>
            <li className="hover:text-blue-900 mt-2">
              <a href="/">portfolio</a>
            </li>
            <li className="hover:text-blue-900 mt-2">
              <a href="/">Nonprofit</a>
            </li>
            <li className="hover:text-blue-900 mt-2">
              <a href="/">Legal</a>
            </li>
            <li className="hover:text-blue-900 mt-2">
              <a href="/">Financial</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="w-5/6 m_extra px-10">
        <h1 className="text-base md:text-4xl text-center md:text-left font-bold md:text-center lg:text-4xl">
          What We Do
        </h1>
        <p className="text-center mt-5 w-5/6 md:w-2/6 m_auto">
          LasioWeb specializes in desining websites and applications for your
          long term business needs
        </p>
        <p className="mt-10 flex more_services ">
          <span className="me-1 font-bold ">MORE ABOUT OUR SERVICES</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#000"
            className="w-4 h-4 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 text-center slide_on_hover">
          <div className="slide_item">
            <div
              id="more_services_1"
              className="items-center rounded text-white "
            >
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="#fff"
                    class="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-base font-bold">
                    Website Design & Development
                  </h1>
                </div>
              </div>
              <div className="second border border-gray-200">
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 lg:block lg:hidden">
                  Web Design & Development
                </h1>
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 hidden lg:block">
                  Web Design & Dev...
                </h1>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Consultation</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Wireframe</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Final Design</span>
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item">
            <div
              id="more_services_2"
              className="items-center rounded text-white "
            >
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="#fff"
                    class="bi bi-layers"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-base font-bold">Logo & Branding</h1>
                </div>
              </div>
              <div className="second border border-gray-200">
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6">
                  Logo & Branding
                </h1>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Exploration</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Sketches</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Digitigation</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Color</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Final Logo</span>
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item">
            <div
              id="more_services_3"
              className="items-center rounded text-white "
            >
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="#fff"
                    class="bi bi-airplane-engines"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-base font-bold">
                    Search Engine Optimization
                  </h1>
                </div>
              </div>
              <div className="second border border-gray-200">
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 lg:hidden">
                  Search Engine Optimization
                </h1>
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 hidden lg:block">
                  Search Engine Opt...
                </h1>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Discover</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Strategy</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Optimization</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Content</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Reporting</span>
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item">
            <div
              id="more_services_4"
              className="items-center rounded text-white "
            >
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="#fff"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-base font-bold">
                    Social Media Marketing
                  </h1>
                </div>
              </div>
              <div className="second border border-gray-200">
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 lg:hidden">
                  Social Media Marketing
                </h1>
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 hidden lg:block">
                  Social Media Mar...
                </h1>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Discover</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Strategy</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Optimization</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Content</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Reporting</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our_portfolio py-5 text-white">
        <h1 className="text-center mt-10 mb-8 text-xl font-bold md:text-4xl">
          Our Portfolio
        </h1>
        
        <div className="w-5/6 m-auto">
        
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          modules={[Grid, A11y]}
          className="mySwiper"
        >          
        <SwiperNavButtons />
          {projects.map((project) => (
          <SwiperSlide className="max-w-xs">
            <div
              // controls-carousel
              id={project.category}
              key={project._id}
              className={project.category + " all relative "}
              data-carousel="static"
            >
              <div class="relative h-56 overflow-hidden rounded-lg ">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <Link href={`/our_work/${project.slug}`}>
                  <Image
                    width={1000}
                    height={1000}
                    src={project.image}
                    className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover "
                    alt=""
                  /></Link>
                </div>
                <div
                  class="hidden duration-700 ease-in-out"
                  data-carousel-item="active"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={project.secondImage}
                    className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                    alt=""
                  />{" "}
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    width={1000}
                    height={1000}
                    src={project.thirdImage}
                    className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                    alt=""
                  />{" "}
                </div>
              </div>
              <button
                type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
                  <span class="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
                  <span class="sr-only">Next</span>
                </span>
              </button>
            </div>
          </SwiperSlide>
            
        ))}
        </Swiper>
        
        <div>
      </div>
        </div>
      </section>
    </div>
  );
}
