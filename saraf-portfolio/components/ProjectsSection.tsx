import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Resumaker",
    description:
      "Full-Stack web-application that lets users create resumes using templates.",
    image: "/resumaker2.jpg",
    github: "https://github.com/Sophack/resumaker",
    link: "https://intense-atoll-83101.herokuapp.com/",
    tech:  "technologies used: Mongo DB, Node JS, Material UI, Stripe Payment, REACT, Express JS, GraphQL", 
  },
  {
    name: "Weather Pal",
    description: "Weather Pal can help optimize travel planning by staying updated with multiple locations at once. ",
    image: "/weatherPal.jpg",
    github: "https://github.com/Sophack/sarafsWeatherApp",
    link: "https://sophack.github.io/sarafsWeatherApp",
    tech:  "technologies used: HTML5, CSS, Vanilla Javascript, API integration: 2 server side APIs (WatchMode & OpenWeather)", 
  },
  {
    name: "Custom Canvas",
    description:
      "A canvas based drawing application that can be easily integrated into any website.",
    image: "/drawingApp.jpg",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
    tech:  "technologies used: HTML5, CSS, Vanilla Javascript, API integration: 2 server side APIs (WatchMode & OpenWeather)", 
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 text-slate-800 dark:text-violet-300">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-indigo-800 dark:text-violet-200">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer text-indigo-900 dark:text-violet-300"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer text-indigo-900 dark:text-violet-300"
                        />
                      </Link>
                      <br></br>
                      <p className="text-xl leading-7 mb-4 mt-20 text-indigo-800 dark:text-violet-300">{project.tech}</p>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection