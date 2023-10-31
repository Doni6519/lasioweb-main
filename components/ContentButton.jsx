import React from "react";

const ContentButton = (props) => {
  return (
    <>
      <section
        className="text-center px-2 py-7 text-white"
        id="purchase_a_package"
      >
        <h1 className="text-2xl mb-5">{props.header}</h1>
        <p className="mb-3">
          {props.paragraph}
        </p>
        <button className="px-7 py-4 m_auto mt-4 font-bold" id="purchase_a_package_btn">
          {props.button}
        </button>
      </section>
    </>
  );
};

export default ContentButton;
