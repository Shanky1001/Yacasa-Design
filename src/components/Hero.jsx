import React from "react";
import { AppStoreIMG, HeroIMG, PlayStoreIMG } from "../assets";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <section id="section-hero" className="py-2 relative h-[60%]">
      <img src={HeroIMG} alt="hero-img" className="h-[70vh] w-full hero-img" />
      <div className="fcc gap-5 text-4xl absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white 500:text-6xl w-[80%] 760:w-[60%] 1100:w-[40%]">
        <h2 className="text-center">
          <span>Find </span>and <span>Choose </span>
          Where you will <span>live</span>
        </h2>
        <h5 className="text-2xl text-center">
          Let's find a best property for you
        </h5>
        <div className="frc 500:gap-4 mt-3">
          <button className="">
            <img
              src={AppStoreIMG}
              alt="app-store"
              className="w-[60%] 500:w-[80%]"
            />
          </button>
          <button>
            <img
              src={PlayStoreIMG}
              alt="play-store"
              className="w-[60%] 500:w-[80%]"
            />
          </button>
        </div>
      </div>
      <div className="hidden 760:frc gap-4 border bg-white px-5 h-[65px] absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[60%]">
        <div className="flex flex-col items-start justify-start w-1/4 pr-4 border-r border-spacing-2">
          <label htmlFor="select" className="text-sm">
            Location
          </label>
          <select name="select" id="select" className="w-full text-[#888]">
            <option>California</option>
            <option>California</option>
          </select>
        </div>
        <form className="frc justify-between w-full">
          <input
            type="text"
            placeholder="Search by locality , type , landmark etc..."
            className="w-[80%] placeholder:text-[#26405D] text-[#26405D] p-3"
          />
          <button className="btn-filled frc gap-2 py-2">
            <CiSearch className="text-xl" />
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
