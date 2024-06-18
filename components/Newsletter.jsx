import React from "react";

const Newsletter = ({background}) => {
  return (
    <div className={`h-fit w-full  py-28 px-5 text-center ${background}  text-white`}>
      <div className="max-w-screen-2xl mx-auto">
        <p className="mb-8">Over 5 Clients</p>
        <h1 className="text-3xl md:text-5xl text-white font-bold mb-5">
          Subscribe our Newsletter
        </h1>
        <p className="text-center text-md md:text-lg">
          Get details update about our Courses, Events, Offers and so on
        </p>

        <form class="w-5/6 md:w-3/5 lg:w-2/5 mx-auto mt-10">
          <div class="">
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-full text-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-3.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email address"
              required
            />
          </div>
          <button
            type="submit"
            class={`w-26 ${background} -mt-12 me-2 float-right text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md  px-4 rounded-full py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
