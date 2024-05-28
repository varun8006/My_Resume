import React, { useState } from "react";
import { GoDesktopDownload } from "react-icons/go";
import brand from '../Assets/—Pngtree—v 3d cinematic_6220151.png';
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-3 h-15 lg:p-10 h-20  flex bg-white justify-between items-center border-b-[1px] border-black z-10 ">
      <a href="/" id="brand" className="flex items-center md:text-sm">
        <img src={brand} alt="brand img" className="w-10 lg:w-10 sm:w-10" />
      </a>
      <div className={isMenuOpen ? "gap-4 block" : "hidden"}>
        <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
        <NavLink to='/about' onClick={toggleMenu}>About</NavLink>
        <NavLink to='/work' onClick={toggleMenu}>Work</NavLink>
        <NavLink to='/service' onClick={toggleMenu}>Service</NavLink>
        <NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink>
        <NavLink to='/blog' onClick={toggleMenu}>Blog</NavLink>
      </div>
      <div className="flex border-black border-2 px-3 py-2 text-sm rounded-3xl">
        <button className="flex items-center gap-2">
          <GoDesktopDownload className='' size={20} />
          <a href="/" className="">RESUME</a>
        </button>
      </div>
      <button className="bg-black text-white  px-3 py-3 text-sm font-semibold rounded-3xl" onClick={toggleMenu}>
        MENU
      </button>
      {isMenuOpen && (
        <div className={ ` z-50 p-3 fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-between items-center overflow-y-scroll ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="flex w-full flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center text-center ">


            <button className="bg-black text-white py-3 px-9 text-sm font-semibold rounded-3xl md:font-light">
              <a href="/">DOWNLOAD RESUME</a>
            </button>

            <a href="/" className="flex justify-center items-center gap-1 font-medium text-l">
              <FaSquareGithub />GITHUB
            </a>
            <a href="/" className="flex justify-center items-center gap-1 font-medium text-l">
              <FaInstagram />INSTAGRAM
            </a>
            <a href="/" className="flex justify-center items-center gap-1 font-medium text-l">
              <FaSquareXTwitter />TWITTER
            </a>
            <button className="border-2 w-20 flex items-center justify-center text-black py-3 text-sm font-semibold rounded-3xl" onClick={toggleMenu}>CLOSE</button>
          </div>

          <div className="font-lg font-semibold text-6xl flex flex-col justify-around items-center h-full">
            <NavLink to='/' onClick={toggleMenu} className="py-1 px-4 text-black hover:text-white hover:bg-[#525252]">Home</NavLink>
            <NavLink to='/about' onClick={toggleMenu} className="py-1 px-4 text-black hover:text-white hover:bg-[#525252]">About</NavLink>
            <NavLink to='/work' onClick={toggleMenu} className="py-1 px-4 text-black hover:text-white hover:bg-[#525252]">Work</NavLink>
            <NavLink to='/service' onClick={toggleMenu} className="py-1 px-4 text-black hover:text-white hover:bg-[#525252]">Service</NavLink>
            <NavLink to='/contact' onClick={toggleMenu} className="py-1 px-4 text-black hover:text-white hover:bg-[#525252]">Contact</NavLink>
            <NavLink to='/blog' onClick={toggleMenu} className="py-1 px-4 text-black hover:text-white hover:bg-[#525252]">Blog</NavLink>
          </div>
        </div>


      )}
    </nav>
  );
};

export default Navbar;
