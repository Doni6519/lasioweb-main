"use client";

import { getCategory, getProjects } from "../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
export default async function ourWork() {
  const categories = await getCategory();
  const projects = await getProjects();
  function handleFilter(target) {
    const category = ["blog", "web development", "portfolio"];
    if (target.target.innerText != "all") {
      for (let cat = 0; cat < category.length; cat++) {
        let checkLen = document.getElementsByClassName(category[cat]);
        for (let i = 0; i < checkLen.length; i++) {
          document.getElementsByClassName(category[cat])[i].style.display =
            "none";
          if (target.target.innerText == category[cat]) {
            document.getElementsByClassName(category[cat])[i].style.display =
              "block";
          }
        }
      }
    } else {
      for (let cat = 0; cat < category.length; cat++) {
        let checkLen = document.getElementsByClassName(category[cat]);
        for (let i = 0; i < checkLen.length; i++) {
          document.getElementsByClassName(category[cat])[i].style.display =
            "block";
        }
      }
    }
  }
  // function handleFilterSelect(target) {
  //   const category = ["blog", "web development", "portfolio"];
  //   if (target.target.value != "all") {
  //     for (let cat = 0; cat < category.length; cat++) {
  //       let checkLen = document.getElementsByClassName(category[cat]);
  //       for (let i = 0; i < checkLen.length; i++) {
  //         document.getElementsByClassName(category[cat])[i].style.display =
  //           "none";
  //         if (target.target.innerText == category[cat]) {
  //           document.getElementsByClassName(category[cat])[i].style.display =
  //             "block";
  //         }
  //       }
  //     }
  //   } else {
  //     for (let cat = 0; cat < category.length; cat++) {
  //       let checkLen = document.getElementsByClassName(category[cat]);
  //       for (let i = 0; i < checkLen.length; i++) {
  //         document.getElementsByClassName(category[cat])[i].style.display =
  //           "block";
  //       }
  //     }
  //   }
  // }

  return (
    <div className="text-sm">
      <Nav color="text-white hover:text-blue-500"/>
      <Image
          width={2000}
          height={2000}
          src="/assets/images/background-img/our-work-bg.png"
          className="absolute block w-full h-full object-cover top-0 goback"
          alt=""
        />
      <div className="hero">
        <div id="hero_text" className=" absolute  z-100">
          <h1 className="font-bold uppercase">website optimization</h1>
          <p className="text-2xl mt-3">
            Data driven strategies to increase your brand awareness and get you
            ahead of your competition.
          </p>
        </div>
      </div>
      <section className="flex justify-around first_item_extra w-5/6"></section>
      {/* <section className="hidden md:grid grid sm:grid-cols-1 md:grid-cols-10 w-5/6 text-xs">
        <a className="" onClick={handleFilter}>
          all
        </a>
        {categories.map((category) => (
          <a className="" onClick={handleFilter} key={category._id}>
            {category.category}
          </a>
        ))}
      </section> */}
      {/* <section className="w-5/6">
        <select
        onChange={handleFilterSelect}
          id="underline_select"
          class="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option selected>Choose a country</option>
          <option value="all">all</option>
          {categories.map((category) => (
            <option value={category.category}>
              <a className="" key={category._id}>
                {category.category}
              </a>
            </option>
          ))}
        </select>
      </section> */}
      <section
        className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-5/6"
        id="to_filter"
      >
        {projects.map((project) => (
          
            <div
              // controls-carousel
              id={project.category}
              key={project._id}
              className={project.category + " all relative w-full"}
              data-carousel="static"
            >
              <div class="relative h-56 overflow-hidden rounded-lg ">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <Link href={`/our_work/${project.slug}`}>
                  <Image
                    width={1000}
                    height={1000}
                    src={project.image}
                    className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                    alt=""
                  />
                  </Link>
                </div>
                <div
                  class="hidden duration-700 ease-in-out"
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
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
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
        ))}
      </section>
    </div>
  );
}
