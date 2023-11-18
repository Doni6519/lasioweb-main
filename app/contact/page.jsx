"use client";
import { sendContactForm } from "@/lib/api";
import { useState } from "react";
import Nav from "@/components/Nav";
const initValues = {
  name: "",
  phone: "",
  company: "",
  email: "",
  message: "",
};
const initState = { values: initValues };

const contact = () => {
  const [state, setState] = useState(initState);
  const { values } = state;
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  const onSubmit = async () => {
    // setState((prev) => ({
    //   ...prev,
    //   isLoading: true
    // }));
    try {
      await sendContactForm(values);
    } catch (error) {}
  };
  return (
    <div className="text-sm">
      <Nav color="text-white hover:text-blue-500"/>
      
      <section className="contact_hero mt-0 p-10" id="send_message">
        <h1 className="mt-10 text-4xl text-white font-bold">Contact us</h1>
        <p className="text-white">Lets talk about your ideas.</p>
        <section>
          <form
            action=""
            method="post"
            className="bg-white md:w-3/6 lg:w-2/6 p-10 drop-shadow md:absolute"
          >
            <h1 className="text-base md:text-2xl font-bold uppercase mb-5">
              Send us a message
            </h1>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={values.name}
                onChange={handleChange}
              />
              <label
                for="name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full name
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={values.email}
                onChange={handleChange}
              />
              <label
                for="email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div class=" md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="phone"
                  id="phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={values.phone}
                  onChange={handleChange}
                />
                <label
                  for="phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={values.company}
                  onChange={handleChange}
                />
                <label
                  for="company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div>

            <textarea
              id="message"
              rows="7"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="How can we help you?"
              name="message"
              value={values.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onSubmit}
            >
              Send
            </button>
          </form>
        </section>
      </section>
      <section
        className=" sm:block md:block lg:flex w-5/6"
        id="send_message_2nd_section"
      >
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 me-3 mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <div className="me-10">
            <h1 className="text-base md:text-xl font-bold">Our Location</h1>
            <p>
              35 Area 5, Aso, <br />
              Mararaba, Nassarawa
            </p>
          </div>
        </div>
        <div className="flex mt-5 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 me-3 mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <div>
            <h1 className="text-base md:text-xl font-bold">How can we help?</h1>
            <a href="mailto:">info@lasioweb.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
