"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

// assign navbar items specific types
interface NavItem {
  label: string;
  page: string;
}

//all items
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const { navbar, setNavbar } = useState(false)

  return (
    <header>
      <div className="flex items-center justify-between flex-wrap bg-violet-950 p-6 hover:text-white mr-4">
        <div className="flex items-center justify-between md:py-4 md:block">
          <div className="">
            <h2 className="text-2xl font-bold text-violet-200 hover:text-white mr-4">
              Saraf Nawar
            </h2>
          </div>
          <div className="md:hidden">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <IoMdClose size={25} />
              ) : (
                <IoMdMenu size={25} color="violet-400" />
              )}
            </button>
          </div>
        </div>
        {/* nested divs create better allignment */}
        <div>
          <div
            className={`flex-1 justify-between pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-violet-200 hover:text-white mr-4">
              {NAV_ITEMS.map((item, idx) => {
                return <a key={idx}>{item.label}</a>;
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-violet-400 p-2 rounded-xl"
                >
                  <RiSunLine size={25} />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-violet-400 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
