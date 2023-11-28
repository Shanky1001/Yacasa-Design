import React, { useState } from "react";
import { Logo } from "../assets";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="frc relative justify-between capitalize text-base w-full py-2">
      <div style={{ flex: "1" }} className="frc cursor-pointer">
        <img src={Logo} alt="ycasa-logo" className="w-[40px]" />
        <span className="uppercase text-2xl text-[#1e1e1e] ml-1 ">ycasa</span>
      </div>
      <div
        style={{ flex: "4" }}
        className="hidden 760:frc justify-end gap-8 text=[#26405D]"
      >
        <ul style={{ flex: "1" }} className="frc gap-10 justify-end">
          <li>About US</li>
          <li>Testimonials</li>
          <li>Blogs</li>
          <li>Contact US</li>
        </ul>
        <div className="frc gap-5">
          <button className="btn-outline">Login</button>
          <button className="btn-filled">Register</button>
        </div>
      </div>
      {open ? (
        <IoMdClose
          className="text-4xl text-[#1e1e1e] z-[100] cursor-pointer 760:hidden"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <CiMenuBurger
          className="text-2xl text-[#1e1e1e] z-[100] cursor-pointer 760:hidden"
          onClick={() => setOpen(!open)}
        />
      )}
      {open && (
        <div className="fixed fcc justify-center gap-3 top-0 left-0 right-0 bottom-0 bg-slate-300 p-3 rounded-sm z-[99] 760:hidden">
          <ul className="fcc justify-center gap-4 text-2xl font-semibold">
            <li>About us</li>
            <li>Testimonials</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
          <div className="frc gap-4">
            <button className="btn-outline">Login</button>
            <button className="btn-filled">Register</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
