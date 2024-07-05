import { getCategory, getProjects } from "../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { motion, AnimatePresence } from "framer-motion";
import GetStarted from "@/components/GetStarted";

export default async function ourWork() {
  // const categories = await getCategory();
  const projects = await getProjects();
  // function handleFilter(target) {
  //   const category = ["blog", "web development", "portfolio"];
  //   if (target.target.innerText != "all") {
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
      <div className="flex mb-24 items-center md:flex-row p-5 md:p-10 justify-between bg-blue-800 h-screen">
        <div id="" className="basis-4/4 md:basis-2/4 text-white md:ms-20">
          <h1 className="font-bold text-4xl mt-20 md:mt-0">Our Work</h1>
          <p className="text-2xl mt-3">
            Each work as helped strengthing our experience and dilevery, thereby
            making us the best.
          </p>
          <Link
            href="/request"
            type="button"
            className="bg-white hover:bg-blue-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-black font-bold mt-10 rounded-full text-sm px-8 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Hire Us
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
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
          className="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
      {/* <div className="w-46 mb-10 mt-8 w-5/6 grid grid-cols-2 gap-x-7 gap-y-3 md:gap-0 md:flex md:justify-between md:items-center md:w-4/6 mx-auto">
        <button
          type="button"
          class="text-white w bg-blue-800 border border-gray-300 focus:outline-none hover:bg-gray-100 hover:text-gray-700 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          All
        </button>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Website
        </button>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Branding
        </button>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Expired
        </button>
      </div> */}
      <div
        className="grid mx-auto gap-4 grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 w-5/6"
        id="to_filter"
      >
        {projects.map((project) => (
          <div className="relative h-56 overflow-hidden rounded-lg ">
            <div className="">
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
          </div>
        ))}
      </div>
      <GetStarted />
      <Newsletter
        background="bg-blue-800"
        button="bg-blue-700"
        hover="hover:bg-blue-500"
      />
    </div>
  );
}
