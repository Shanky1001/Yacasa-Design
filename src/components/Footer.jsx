import React from "react";
import { GalleryIMG, Logo } from "../assets";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#0E2A3E] relative py-6 w-full mt-[180px] 500:mt-[230px]">
      <div
        id="newsletter"
        className="bg-[#3FC1C9] rounded-sm 500:h-[190px] 760:h-[230px] absolute -top-[150px] 500:-top-[170px]  760:-top-[200px] left-5 right-5 z-30 px-2 500:px-12 py-4 fcc gap-4 900:frc 760:gap-6 1200:gap-10"
      >
        <div
          style={{ flex: "1" }}
          className="flex flex-col w-full items-start gap-5 text-white px-0 760:px-10 1200:px-12"
        >
          <h3 className="text-3xl 500:text-5xl font-bold">
            Subscribe Newsletter
          </h3>
          <p className="text-md capitalize hidden 760:block">
            Signup Your email address to subscribe our newsletter to get latest
            post and news about our product and company
          </p>
        </div>
        <div style={{ flex: "1" }} className="fcc items-start 500:frc w-full">
          <input
            type="text"
            className="px-6 py-4 placeholder:text-gray-400 w-[80%] 900:w-[70%]"
            placeholder="Enter your Email"
          />
          <button className="font-semibold mt-2 500:mt-0 text-white bg-[#0E2A3E] px-6 py-4">
            Subscribe
          </button>
        </div>
      </div>
      <div
        id="container"
        className="pt-16 grid grid-cols-1 400:grid-cols-2 760:grid-cols-3 1200:grid-cols-4 gap-20"
      >
        <div className="fcc gap-7 items-start text-white">
          <div className="frc cursor-pointer ">
            <img src={Logo} alt="ycasa-logo" className="w-[35px]" />
            <span className="uppercase  text-white text-xl ml-1 ">ycasa</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam illum
            numquam eos impedit a.
          </p>
          <div className="frc gap-2 text-white">
            <FaFacebook className="p-2 text-4xl bg-[#3FC1C9] rounded-full cursor-pointer" />
            <FaInstagram className="p-2 text-4xl bg-[#3FC1C9] rounded-full cursor-pointer" />
            <FaTwitter className="p-2 text-4xl bg-[#3FC1C9] rounded-full cursor-pointer" />
          </div>
        </div>
        <div className="fcc gap-7  contact items-start  text-white">
          <div className="fcc items-start gap-4">
            <h5 className="text-2xl font-bold">Contact</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="95"
              height="7"
              viewBox="0 0 187 7"
              fill="none"
            >
              <rect width="95" height="7" fill="#3FC1C9" />
              <rect x="82" y="3" width="95" height="1" fill="#3FC1C9" />
            </svg>
          </div>
          <ul className="fcc items-start gap-1">
            <li>
              <CiLocationOn className="text-md" />
              <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
            </li>
            <li>
              <CiPhone />
              <span>+1 752 256 5968</span>
            </li>
            <li>
              <CiMail />
              <span>info@ycasa.com</span>
            </li>
            <li>
              <FaWatchmanMonitoring />
              <span>Mon-Fri: 9:00 am – 6:00 pm</span>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="fcc gap-7 items-start text-white">
          <div className="fcc items-start gap-4">
            <h5 className="text-2xl font-bold capitalize">Usefull link</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="95"
              height="7"
              viewBox="0 0 187 7"
              fill="none"
            >
              <rect width="95" height="7" fill="#3FC1C9" />
              <rect x="82" y="3" width="95" height="1" fill="#3FC1C9" />
            </svg>
          </div>
          <ul className="fcc items-start gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="fcc gap-7 hidden 400:block 400:col-span-1 760:col-span-3 1200:col-auto items-start text-white">
          <div className="fcc items-start gap-4">
            <h5 className="text-2xl font-bold capitalize">Awesome Gallery</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="95"
              height="7"
              viewBox="0 0 187 7"
              fill="none"
            >
              <rect width="95" height="7" fill="#3FC1C9" />
              <rect x="82" y="3" width="95" height="1" fill="#3FC1C9" />
            </svg>
          </div>
          <div className="frc flex-wrap mt-3">
            {new Array(9).fill(0).map((_, i) => (
              <img
                src={GalleryIMG}
                alt={`gallery-img-${i}`}
                className="border border-black w-[80px] cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
