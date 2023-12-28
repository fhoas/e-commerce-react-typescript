// import React from "react";

const ErrorPage = () => {
  return (
    <div className="error__wrapper bg-black text-white flex items-center justify-center flex-col p-8 min-h-[calc(100vh-136px)]">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl">4</h1>
        <img
          className="w-[100px] h-[100px]"
          src="https://c.tenor.com/Nl45qRGQk_0AAAAi/ghost-white.gif"
        />
        <h1 className="text-5xl">4</h1>
      </div>

      <p className="frown-it text-lg">ERROR</p>
      <a
        href="/"
        className="bg-white text-black inline-block text-sm p-2 rounded-full mt-8 border border-white transition duration-300 hover:bg-black hover:text-white"
      >
        Back to home
      </a>
    </div>
  );
};

export default ErrorPage;
