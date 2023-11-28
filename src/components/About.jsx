import React from "react";
import { AboutIMG, AboutIMG2, ArrowIMG } from "../assets";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const About = () => {
  return (
    <section
      id="section-about"
      className="px-[30px] py-[60px] bg-white border flex flex-col-reverse gap-6 900:gap-5 1200:gap-20 900:frc"
    >
      <div id="left" style={{ flex: "1" }} className="relative w-full">
        <span className="about-gradient"></span>
        <img
          src={ArrowIMG}
          alt="arrow"
          className="h-[120px] absolute -top-[20px] -right-[70px] hidden 900:block"
        />
        <img
          src={AboutIMG}
          alt="about-img"
          className=" w-[95%] 500:w-[80%] h-[100%] 500:h-[100%] absolute z-20 top-4 left-4"
        />
        <img
          src={AboutIMG2}
          alt="about-img"
          className="w-[60%] -right-4 500:w-[40%] h-[250px] absolute top-[60%] 500:right-3 z-30 transform -translate-y-1/2"
        />
      </div>
      <div
        id="right"
        style={{ flex: "0.90" }}
        className="flex flex-col items-start gap-3 900:px-20 h-full"
      >
        <h4 className="right-heading frc gap-2">
          <span className="line"></span>
          About us
        </h4>
        <div
          className="h-full flex flex-col items-start gap-4
         text-[#27415E]"
        >
          <h3 className="font-bold text-3xl">
            The Leading Real Estate Rental Marketplace.
          </h3>
          <h6 className="text-md capitalize text-justify">
            Over 39,000 people work for us in more than 70 countries all over
            the This breadth of global coverage, combined with specialist
            services
          </h6>
          <ul className="right-bullets w-full grid grid-cols-1  500:grid-cols-2  justify-between gap-3">
            <li>
              <span>
                <IoMdHome />
              </span>
              Smart Home Design
            </li>
            <li>
              <span>
                <IoMdHome />
              </span>
              Smart Home Design
            </li>
            <li>
              <span>
                <IoMdHome />
              </span>
              Smart Home Design
            </li>
            <li>
              <span>
                <IoMdHome />
              </span>
              Smart Home Design
            </li>
          </ul>
          <p className="text-md capitalize text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            dignissimos, delectus ratione laborum quibusdam
          </p>
          <button className="frc gap-3 text-white bg-[#0E2A3E] text-lg px-4 py-2 rounded-sm">
            Know More
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
