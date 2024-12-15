import React, { useRef, useState } from "react";
import menu_icon from "../../assets/images/menu_icon.png";
import close_icon from "../../assets/images/cross_icon.png";
import logo from "../../assets/images/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MagnifyingGlass, User } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
  };

  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Navbar for Large Screens */}
      <div className="hidden fixed w-full top-0 z-40 md:flex justify-between items-center px-20 py-4 bg-green-200 shadow-lg">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-20" />
        </div>
        <nav className="flex gap-8 text-lg">
          <AnchorLink
            href="#home"
            className="text-gray-800 hover:text-green-600"
          >
            الصفحة الرئيسية
          </AnchorLink>
          <AnchorLink
            href="#about"
            className="text-gray-800 hover:text-green-600"
          >
            تعرف علينا
          </AnchorLink>
          <AnchorLink
            href="#menu"
            className="text-gray-800 hover:text-green-600"
          >
            القائمة
          </AnchorLink>
          <AnchorLink
            href="#contact"
            className="text-gray-800 hover:text-green-600"
          >
            تواصل معنا
          </AnchorLink>
        </nav>
        <div className="flex justify-center items-center gap-3">
          <button
            className="p-3 bg-green-300 rounded-xl hover:bg-green-700 
            hover:text-white duration-100 ease-linear"
            onClick={() => navigate("/login")}
          >
            <User size={25} />
          </button>
          <button
            className="p-3 bg-green-300 rounded-xl hover:bg-green-700 
            hover:text-white duration-100 ease-linear"
          >
            <MagnifyingGlass size={25} />
          </button>
        </div>
      </div>

      {/* Navbar for Mobile Screens */}
      <div className="flex fixed w-full z-50 top-0 md:hidden justify-between items-center px-4 py-4 bg-green-200 shadow-lg">
        <img src={logo} alt="Logo" className="w-10" />
        <img
          src={menu_icon}
          alt="Menu Icon"
          className="w-8 cursor-pointer"
          onClick={openMenu}
        />
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed z-50 top-0 right-[-100%] w-[70%] h-full bg-green-200 shadow-lg flex flex-col items-end p-6 gap-6 transition-all duration-300"
      >
        <img
          src={close_icon}
          alt="Close Icon"
          className="w-6 cursor-pointer"
          onClick={closeMenu}
        />
        <AnchorLink
          href="#home"
          className="text-gray-800 hover:text-green-600 text-lg"
          onClick={closeMenu}
        >
          الصفحة الرئيسية
        </AnchorLink>
        <AnchorLink
          href="#about"
          className="text-gray-800 hover:text-green-600 text-lg"
          onClick={closeMenu}
        >
          تعرف علينا
        </AnchorLink>
        <AnchorLink
          href="#menu"
          className="text-gray-800 hover:text-green-600 text-lg"
          onClick={closeMenu}
        >
          القائمة
        </AnchorLink>
        <AnchorLink
          href="#contact"
          className="text-gray-800 hover:text-green-600 text-lg"
          onClick={closeMenu}
        >
          تواصل معنا
        </AnchorLink>
      </div>
    </div>
  );
}
