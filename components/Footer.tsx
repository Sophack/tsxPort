import React from "react"
import { FaGithub, FaLinkedin, FaStackOverflow, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-violet-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-violet-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-violet-500 dark:text-violet-200">
          © 2023 Saraf Nawar<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/Sophack" rel="noreferrer" target="_blank">
            <FaGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-violet-500 dark:text-violet-200"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/SarafNawar14"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-violet-500 dark:text-violet-200"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sarafprofessional/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-violet-500 dark:text-violet-200"
              size={30}
            />
          </a>
          <a
            href="https://www.facebook.com/sarafRealtorDev"
            rel="noreferrer"
            target="_blank"
          >
            <FaStackOverflow
              className="hover:-translate-y-1 transition-transform cursor-pointer text-violet-500 dark:text-violet-200"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer