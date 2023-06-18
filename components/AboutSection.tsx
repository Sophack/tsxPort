"use client"
import React, { useState } from "react"
import { HiHand, HiOutlineSun, HiOutlineUserGroup, HiOutlinePencilAlt, HiOutlinePresentationChartLine } from "react-icons/hi";
import ScrollButton from "./ScrollButton"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "React/Native" },
  { skill: "Tailwind CSS" },
  { skill: "Material UI" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Figma" },
  { skill: "Express.js" },
  { skill: "Next.js" },
  { skill: "GraphQL" },
  { skill: "MERN Stack" },
]

 
const iconArray = [HiHand, HiOutlineSun, HiOutlineUserGroup, HiOutlinePencilAlt, HiOutlinePresentationChartLine];


const AboutSection = () => {
  const [showAbout, setShowAbout] = useState(true);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  
  return (
    <section id="about" className={showAbout ? 'about-section' : 'about-section hidden'}>
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 customViolet border-0 rounded"></hr>
        </h1>
        <ScrollButton showAbout={showAbout} toggleAbout={toggleAbout} />
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
        
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me! 
                       
              </h1>
            <p>
              Hi, my name is Saraf and I am a{" "}
              <span className="font-bold customText">{"highly ambitious"}</span>,
              <span className="font-bold customText">{" self-motivated"}</span>, and
              <span className="font-bold customText">{" driven"}</span> full-stack developer
              based in Toronto, Canada 🍁
            </p>
            <br />
            <p>
              I love building dynamic websites and web-based applications from scratch. My background experience in real estate allows me to excel at communications with prospective clients as well as within a team.     
            </p>
            <br />
            <p>
              My favourite indoor activities include playing piano, reading & hanging out with my cat 😸
              <br>
              </br>My favourite outdoor activities are playing volleyball, hiking and gardening 👩🏽‍🌾
               
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
            As an outgoing individual, I have leveraged my versatile abilities into  {" "}
              <span className="font-bold customText">
                transferable skills.</span>{" "}
               Technology ignites my fire and Im fascinated by the limits of whats possible.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="handicon">
            {iconArray.map((IconComponent, index) => (
        <IconComponent key={index} size={50} />
      ))}
            </div>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection