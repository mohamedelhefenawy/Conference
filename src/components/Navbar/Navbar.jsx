import { useEffect, useRef, useState } from "react";
import menu_icon from "../../assets/images/menu_icon.png";
import logo from "../../assets/images/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { List, MagnifyingGlass, User, X } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <List
          size={30}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          weight="bold"
          className="cursor-pointer absolute left-3 
          hover:scale-110 ease-linear duration-150 hover:text-green-700"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 top-0 right-0 w-[70%] h-full bg-green-200 shadow-lg flex flex-col items-start p-6 gap-6 transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={menuRef}
      >
        <X
          size={30}
          className="cursor-pointer absolute left-3 
          hover:scale-110 ease-linear duration-150 hover:text-green-700"
          weight="bold"
          onClick={() => setIsMenuOpen(false)}
        />
        <AnchorLink
          href="#home"
          className="text-gray-800 hover:text-green-600 text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          الصفحة الرئيسية
        </AnchorLink>
        <AnchorLink
          href="#about"
          className="text-gray-800 hover:text-green-600 text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          تعرف علينا
        </AnchorLink>
        <AnchorLink
          href="#menu"
          className="text-gray-800 hover:text-green-600 text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          القائمة
        </AnchorLink>
        <AnchorLink
          href="#contact"
          className="text-gray-800 hover:text-green-600 text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          تواصل معنا
        </AnchorLink>
        <div className="flex justify-center items-center gap-3">
          <button
            className="p-3 bg-green-300 rounded-xl hover:bg-green-700 
            hover:text-white duration-100 ease-linear"
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/login");
            }}
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
    </div>
  );
}
