import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { data } from "../assets/data";
import { IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1200,
    },
    items: 4,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1200,
      min: 861,
    },
    items: 3,
  },
  large_mobile: {
    breakpoint: {
      max: 860,
      min: 465,
    },
    items: 2,
  },
};

const Recommended = () => {
  return (
    <section id="section-recommended" className="py-10 w-full relative">
      <div className="mx-2 my-3">
        <h3 className="text-lg font-bold text-[#26405D]">
          Recommended Listings
        </h3>
        <h6 className="text-[#59718B] text-md">
          See the most up-to-date listings
        </h6>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        customButtonGroup={<CustomButtonGroup />}
        renderButtonGroupOutside={true}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map((val) => (
          <RecommendedCard data={val} key={val.id} />
        ))}
      </Carousel>
    </section>
  );
};

export default Recommended;

const CustomButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="absolute top-16 right-0 frc gap-4">
      <button
        className={
          currentSlide === 0
            ? "opacity-75"
            : "border text-black bg-slate-100 p-2 shadow-sm rounded-sm"
        }
        disabled={currentSlide === 0}
        onClick={() => previous()}
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => next()}
        className="border text-black bg-slate-100 p-2 shadow-sm rounded-sm"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

const RecommendedCard = ({ data }) => {
  return (
    <div className="relative mx-2 recommended-card">
      <div className="relative">
        <img
          src={data.img}
          alt={data.location}
          className="w-[360px] h-[216px]"
        />
        <IoMdHeart className="text-gray-600 text-xl absolute top-2 right-4 outline-1 outline-white" />
        <h6 className="text-sm text-gray-300 px-2 py-1 bg-slate-900 absolute bottom-3 left-2">
          House
        </h6>
      </div>
      <div className="px-2">
        <div className="frc justify-between mt-2">
          <h5 className="text-[#27415E] font-bold text-lg">{data.price}</h5>
          <h6 className="p-1 bg-[#F4AE23] frc gap-1 text-white text-md">
            <FaStar />
            {data.rating}
          </h6>
        </div>
        <div className="frc gap-4 text-sm capitalize text-[#59718B]">
          <p>
            <span>{data.beds} Beds</span> | <span>{data.baths} Baths</span>
          </p>
          <p className="room-type">{data.type}</p>
        </div>
        <p className="frc text-[#59718B] text-sm gap-1">
          <CiLocationOn />
          {data.location}
        </p>
        <div className="frc gap-3 mt-2">
          <img
            src={data.customer.img}
            alt={data.customer.name}
            className="w-[40px]"
          />
          <div className="flex flex-col items-start text-[#27415E]">
            <p className="font-bold text-md">{data.customer.name}</p>
            <p className="text-sm">Hosted By {data.customer.hostedBy}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
