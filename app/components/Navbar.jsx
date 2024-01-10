"use client";
import React, { useEffect, useState } from "react";
import { navData } from "../data/navData";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   setShow(false);
  // }, [show,setShow]);
  
  console.log(show);
  return (
    <div>
      <nav className="bg-transparent border-gray-200 dark:bg-gray-900 p-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a className="self-center text-3xl sm:text-4xl font-semibold whitespace-nowrap dark:text-white">
            <span className="text-4xl font-bold text-[#C1D3FE]">M</span>anpreet
            <span className="text-4xl font-bold text-[#C1D3FE]"> K</span>aur.
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            // onClick={() => setShow(!show)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            // style={{ display: show ? "initial" : "none" }}
            className="hidden w-full md:block md:w-auto bg-transparent"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navData.map((item, index) => (
                <li key={index} className="hover:text-yellow-color text-right">
                  <Link
                    href={item.link}
                    // onClick={() => setShow(false)}
                    className="hover:transition ease-in-out delay-150 hover:-translate-y-0.5 block py-2 px-3 text-white hover:text-yellow-color md:border-0 md:p-0 dark:text-white"
                  >
                    {item.name}
                  </Link>
                  <span className="w-0 h-[3px] bg-orange-700 absolute left-0 bottom-[-6px] transition-all hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
