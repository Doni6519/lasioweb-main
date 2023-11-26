"use client";
import React from "react";
import { Flex,Box,Heading,Text,Button,Spacer,HStack, useToast } from "@chakra-ui/react";
const page = () => {
  const toast = useToast();

  const ToastExample =()=> {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
  return (
    <div>
        <button
              type="button"
              onClick={ToastExample}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Quote
            </button>
    </div>
  );
};

export default page;
