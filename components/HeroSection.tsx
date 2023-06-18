"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi"



const HeroSection = () => {
  return (
    <section id="home">
      <div>
        <div className="flex flex-col text-center mt-20 items-center justify-center animate-fadeIn animation-delay-12 my-5 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left md:flex-row">
          <div>
            <Image
              className="rounded-full shadow-2xl"
              src="/saraf-cartoon.png"
              alt=""
              width={320}
              height={300}
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-5xl font-bold mt-6 md:mt-0 md:text-7xl">
              Hi, I&#39;m Saraf!
            </h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              I&#39;m a Software Developer based in Toronto, Canada. Working towards
              streamlining innovative solutions that make life more efficient.
            </p>
            <Link
              to="projects"
              className="customViolet text-slate-100 hover:cursor-pointer font-semibold px-6 py-3 rounded shadow hover:bg-violet-300"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
