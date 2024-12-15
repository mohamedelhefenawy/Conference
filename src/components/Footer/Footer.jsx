import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer({ line, useline }) {
  return (
    <div className="max-w-[80%] mx-auto mt-24 flex flex-col items-center gap-12">
      <div className="flex justify-center flex-col md:flex-row gap-8" dir="ltr">
        <div
          className="icon border border-[#384250] p-4 rounded-full
        transition duration-300 ease-in-out cursor-pointer 
        hover:bg-[#b8eacb] hover: hover:border-[#b8eacb]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88Zm5.92-9c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21a.995.995 0 0 1-1.09-.21c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38Z"
              fill="#0d121c"
            ></path>
          </svg>
        </div>
        <div className="icon border border-[#384250] p-4 rounded-full transition duration-300 ease-in-out cursor-pointer hover:bg-[#b8eacb] hover:border-[#b8eacb]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="#0d121c"
              d="M21.98 11.41c-.34-5.8-5.61-10.27-11.68-9.27-4.18.69-7.53 4.08-8.18 8.26-.38 2.42.12 4.71 1.21 6.6l-.89 3.31c-.2.75.49 1.43 1.23 1.22l3.26-.9c1.48.87 3.21 1.37 5.06 1.37 5.64 0 10.32-4.97 9.99-10.59zm-5.1 4.31a2.279 2.279 0 01-1.16 1.1c-.3.13-.63.19-.98.19-.51 0-1.06-.12-1.63-.37a9.16 9.16 0 01-1.72-.99c-.58-.42-1.12-.89-1.64-1.4-.52-.52-.98-1.07-1.4-1.64-.41-.57-.74-1.14-.98-1.71-.24-.57-.36-1.12-.36-1.64 0-.34.06-.67.18-.97.12-.31.31-.59.58-.84.32-.32.67-.47 1.04-.47.14 0 .28.03.41.09.13.06.25.15.34.28l1.16 1.64c.09.13.16.24.2.35.05.11.07.21.07.31 0 .12-.04.24-.11.36s-.16.24-.28.36l-.38.4c-.06.06-.08.12-.08.2 0 .04.01.08.02.12.02.04.03.07.04.1.09.17.25.38.47.64a13.482 13.482 0 001.53 1.53c.26.22.48.37.65.46.03.01.06.03.09.04.04.02.08.02.13.02.09 0 .15-.03.21-.09l.38-.38c.13-.13.25-.22.36-.28.12-.07.23-.11.36-.11.1 0 .2.02.31.07.11.05.23.11.35.2l1.66 1.18c.13.09.22.2.28.32.05.13.08.25.08.39-.06.17-.1.36-.18.54z"
            ></path>
          </svg>
        </div>
        <div className="icon border border-[#384250] p-4 rounded-full transition duration-300 ease-in-out cursor-pointer hover:bg-[#b8eacb] hover:border-[#b8eacb]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="#0d121c"
              d="M22 16.19c0 3.64-2.17 5.81-5.81 5.81H15c-.55 0-1-.45-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03c.14-.01.26-.11.29-.25l.35-1.91a.303.303 0 00-.3-.35l-2.13.03c-.28 0-.5-.22-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04c.17 0 .3-.13.3-.3l-.04-2.4c0-.17-.13-.3-.3-.3l-2.7.04a2.996 2.996 0 00-2.95 3.05l.05 2.75c.01.28-.21.5-.49.51l-1.2.02c-.17 0-.3.13-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7c.01.56-.44 1.02-1 1.02h-2.3C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81v8.38z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex gap-8 flex-wrap justify-center">
        <AnchorLink
          href="#home"
          onClick={() => useline("#home")}
          className={`text-2xl px-4 py-2 border border-[#54c08a] rounded-lg ${
            line === "#home" ? "bg-[#54c08a] text-white" : "text-[#384250]"
          }`}
        >
          الصفحة الرئيسية
        </AnchorLink>
        <AnchorLink
          href="#about"
          onClick={() => useline("#about")}
          className={`text-2xl px-4 py-2 border border-[#54c08a] rounded-lg ${
            line === "#about" ? "bg-[#54c08a] text-white" : "text-[#384250]"
          }`}
        >
          تعرف علينا
        </AnchorLink>
        <AnchorLink
          href="#menu"
          onClick={() => useline("#menu")}
          className={`text-2xl px-4 py-2 border border-[#54c08a] rounded-lg ${
            line === "#menu" ? "bg-[#54c08a] text-white" : "text-[#384250]"
          }`}
        >
          القائمة
        </AnchorLink>
        <AnchorLink
          href="#contact"
          onClick={() => useline("#contact")}
          className={`text-2xl px-4 py-2 border border-[#54c08a] rounded-lg ${
            line === "#contact" ? "bg-[#54c08a] text-white" : "text-[#384250]"
          }`}
        >
          تواصل معنا
        </AnchorLink>
      </div>

      <div className="text-4xl text-center mb-2 capitalize">
        تم الإنشاء بواسطة{" "}
        <span className="font-bold text-[#14573a]">تهاني</span> | جميع الحقوق
        محفوظة
      </div>
    </div>
  );
}

export default Footer;
