"use client";
import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { sendNewsletterForm } from "@/lib/api";

const initValues = {
  email: "",
};
const initState = { values: initValues };

const Newsletter = ({background, button, hover }) => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const { values, error, isLoading } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubscribe = async (e) => {
    e.preventDefault();
    document.getElementById("submitButton").setAttribute("class", "hidden")
    try {
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      await sendNewsletterForm(values);
      setState(initState);
      toast({
        title: "Thank you for subscribing.",
        description: "You can now receive updates via your email.",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    document.getElementById("submitButton").setAttribute("class", "absolute text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800")
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };
  return (
    <div
      className={`h-fit w-full  py-28 px-5 text-center ${background}  text-white`}
    >
      <div className="max-w-screen-2xl mx-auto">
        <p className="mb-8">More over 5+ Clients</p>
        <h1 className="text-3xl md:text-5xl text-white font-bold mb-5">
          Subscribe our Newsletter
        </h1>
        <p className="text-center text-md md:text-lg">
          Get update about our offers, produts and so on
        </p>

        <form
          class="w-5/6 md:w-3/5 lg:w-2/5 mx-auto mt-10"
          onSubmit={onSubscribe}
        >
          <div class="">
          <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-full text-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-3.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
              placeholder="Email address"
              required
            />
          </div>
          <Button
            disabled={true}
            variant="solid"
            colorScheme="blue"
            isLoading={isLoading}
          >
            Subscribe
          </Button>
          <button type="submit" id="submitButton" style={{marginLeft: -105, width: 109}} class={`${button} ${hover} absolute text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
