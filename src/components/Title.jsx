import React from "react";

const Title = ({ title, desc }) => {
  return (
    <>
      <h2 className="text-base sm:text-2xl bg-purple-200 px-5 py-1 rounded-full dark:bg-gray-800 transition duration-300 font-medium">
        {title}
      </h2>
      <p className="max-w-lg text-center text-gray-500 dark:text-white/75 text-sm sm:text-base mb-6">
        {desc}
      </p>
    </>
  );
};

export default Title;
