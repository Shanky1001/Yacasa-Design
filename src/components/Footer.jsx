import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0E2A3E] relative h-[200px] w-full mt-[110px] 500:mt-[230px]">
      <div id="newsletter" className="bg-[#3FC1C9] h-[150px] rounded-sm 500:h-[230px] absolute -top-[100px] 500:-top-[200px] left-5 right-5 z-30 px-2 500:px-12 py-4 fcc gap-4 900:frc 760:gap-6 1200:gap-10">
        <div
          style={{ flex: "1" }}
          className="flex flex-col items-start gap-5 text-white px-0 760:px-10 1200:px-12"
        >
          <h3 className="text-3xl 500:text-5xl font-bold">
            Subscribe Newsletter
          </h3>
          <p className="text-md capitalize hidden 760:block">
            Signup Your email address to subscribe our newsletter to get latest
            post and news about our product and company
          </p>
        </div>
        <div style={{ flex: "1" }} className="frc w-full">
          <input
            type="text"
            className="px-6 py-4 placeholder:text-gray-400 w-[80%] 900:w-[70%]"
            placeholder="Enter your Email"
          />
          <button className="font-semibold text-white bg-[#0E2A3E] px-6 py-4">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
