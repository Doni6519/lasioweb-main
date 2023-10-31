"use client";
import { useState } from "react";
import Link from "next/link";
import { requestContactForm } from "@lib/api";

const initValues = {
  // name: "",
  // whatsapp_number: "",
  // business: "",
  // email: "",
  // url: "",
  // comment: "",
  // comment: "",
  // checkbox1: "",
  // checkbox2: "checkbox2",
  // checkbox3: "checkbox3",
  // checkbox4: "checkbox4",
  // checkbox5: "checkbox5",
  // checkbox6: "checkbox6",
  // checkbox7: "checkbox7",
  // checkbox8: "checkbox8",
  // checkbox9: "checkbox9",
  // checkbox10: "checkbox10",
  // checkbox11: "checkbox11",
  // checkbox12: "checkbox12",
  // checkbox13: "checkbox13",
  // checkbox14: "checkbox14",
  // checkbox15: "checkbox15",
  // checkbox16: "checkbox16",
  // checkbox17: "checkbox17",
};
const initState = { values: initValues };

const request = () => {
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
      await requestContactForm(values);
    } catch (error) {}
  };
  return (
    <div className="text-sm">
      <h1 className="text-center text-4xl font-bold mt-10">Submit a Request</h1>
      <p className="text-center text-base">
        Need any of our
        <Link
          rel="stylesheet"
          href="/services"
          className="md:text-blue-700 md:hover:text-blue-700 ms-1"
        >
          services
        </Link>
        ? Fill the form below and we'll get in touch shortly.
      </p>
      <section className="mt-0 p-10 md:w-3/6 lg:w-2/6">
        <form action="" method="post" className="bg-white p-5 drop-shadow">
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
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="business"
              id="business"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              value={values.business}
              onChange={handleChange}
            />
            <label
              for="business"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Business name
            </label>
          </div>
          <div class=" md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="whatsapp_number"
                id="whatsapp_number"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={values.whatsapp_number}
                onChange={handleChange}
              />
              <label
                for="whatsapp_number"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Whatsapp number (123-456-7890)
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="url"
                id="url"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={values.url}
                onChange={handleChange}
              />
              <label
                for="url"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Website URL (if any)
              </label>
            </div>
          </div>
          <h1 className="font-bold text-base mt-1 mb-3">
            What do you need help with?
          </h1>

          <fieldset>
            <legend class="sr-only">Checkbox variants</legend>
            <div class="flex items-center mb-4">
              <input
                id="checkbox-1"
                type="checkbox"
                name="checkbox1"
                value="I want a new website"
                onChange={handleChange}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-1"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I want a new website
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input
                id="checkbox-2"
                type="checkbox"
                name="checkbox2"
                value="I want to redesign my current website"
                onChange={handleChange}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-2"
                onChange={handleChange}
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I want to redesign my current website
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input
                id="checkbox-3"
                type="checkbox"
                name="checkbox3"
                value="I want my website on google first page (SEO)"
                onChange={handleChange}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-3"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I want my website on google first page (SEO)
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input
                id="checkbox-4"
                type="checkbox"
                name="checkbox4"
                value="I want to setup an online store"
                onChange={handleChange}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-4"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I want to setup an online store
              </label>
            </div>

            <div className="md:flex">
              <div class="flex items-center mb-4 me-3">
                <input
                  id="checkbox-5"
                  type="checkbox"
                  name="checkbox5"
                  value="I need a logo design"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-5"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I need a logo design
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input
                  id="checkbox-6"
                  type="checkbox"
                  name="checkbox6"
                  value="Investment Website"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-6"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Investment Website
                </label>
              </div>
            </div>

            <div className="md:flex">
              <div class="flex items-center mb-4 me-3">
                <input
                  id="checkbox-7"
                  type="checkbox"
                  name="checkbox7"
                  value="Affiliate Marketing System"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-7"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Affiliate Marketing System
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input
                  id="checkbox-8"
                  type="checkbox"
                  name="checkbox8"
                  value="Social & Digital Marketing"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-8"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Social & Digital Marketing
                </label>
              </div>
            </div>

            <div class="flex items-center mb-4">
              <input
                id="checkbox-9"
                type="checkbox"
                name="checkbox9"
                value="I Need Help With Website Maintenance or Hosting"
                onChange={handleChange}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-9"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I Need Help With Website Maintenance or Hosting
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input
                id="checkbox-10"
                type="checkbox"
                name="checkbox10"
                value="Other (Specify below)"
                onChange={handleChange}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-10"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Other (Specify below)
              </label>
            </div>
          </fieldset>

          <textarea
            id="message"
            rows="4"
            name="comment"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Comment other things you need help with"
            value={values.comment}
            onChange={handleChange}
          ></textarea>
          <h1 className="font-bold text-base mt-3 mb-3">Your Budget</h1>

          <fieldset>
            <legend class="sr-only">Checkbox variants</legend>

            <div className="flex">
              <div class="flex items-center mb-4 me-3">
                <input
                  id="checkbox-11"
                  type="checkbox"
                  name="checkbox11"
                  value="0 - $450"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-11"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  0 - $450
                </label>
              </div>

              <div class="flex items-center mb-4 me-3">
                <input
                  id="checkbox-12"
                  type="checkbox"
                  name="checkbox12"
                  value="$500 - $1000"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-12"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  $500 - $1000
                </label>
              </div>

              <div class="flex items-center mb-4 me-3">
                <input
                  id="checkbox-13"
                  type="checkbox"
                  name="checkbox13"
                  value="$1000 - $2000"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-13"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  $1000 - $2000
                </label>
              </div>
            </div>
            <div className="flex">
              <div class="flex items-center mb-4 me-3">
                <input
                  id="checkbox-14"
                  type="checkbox"
                  name="checkbox14"
                  value="$2000 - $ 5000"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-14"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  $2000 - $ 5000
                </label>
              </div>

              <div class="flex items-center mb-4 me-3">
                <input
                  id="checkbox-15"
                  type="checkbox"
                  name="checkbox15"
                  value="$5000 - $10000"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-15"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  $5000 - $10000
                </label>
              </div>

              <div class="flex items-center mb-4 me-3">
                <input
                  id="checkbox-16"
                  type="checkbox"
                  name="checkbox16"
                  value="$20000 - $50000"
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-16"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  $20000 - $50000
                </label>
              </div>
            </div>
            <div class="flex items-center mb-4 me-3">
              <input
                id="checkbox-17"
                type="checkbox"
                name="checkbox17"
                value="Dont have a budget"
                onChange={handleChange}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox-17"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Dont have a budget
              </label>
            </div>
          </fieldset>

          <button
            type="submit"
            onClick={onSubmit}
            class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default request;
