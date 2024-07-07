import React from "react";
import { FaReact } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { CgPerformance } from "react-icons/cg";
import { DiCodeBadge } from "react-icons/di";
const About = () => {
  return (
    <>
      <div>
        <h2 className="text-4xl font-extrabold dark:text-white">About Me</h2>
        <p className="my-4 text-lg text-gray-500">
          I have 1 year 6 months of experience in MERN stack technology,
          specializing in developing dynamic web applications. My expertise lies
          in optimizing performance and efficiency across the stack. I focus on
          enhancing user experience and reducing load times. This includes
          implementing best practices in React, Node.js, Express, and MongoDB.
        </p>
      </div>
      <hr></hr>
      <h2 className="text-4xl font-extrabold dark:text-white mt-6 mb-6">
        What I Do!
      </h2>
      <div className="grid grid-cols-1 grid-rows-1 sm:grid-rows-2 sm:grid-cols-2  gap-4 sm:px-7 mt-6">
        <div>
          <div className="max-w-sm p-6  bg-[#0b65741f] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FaReact
              style={{ fontSize: "xxx-large", color: "#00fffd" }}
            ></FaReact>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Front-End Development
              </h5>
            </a>
            <p className="mb-3 font-normal">
              creating the visual and interactive elements of a website using
              HTML, CSS, and JavaScript to ensure a user-friendly experience.
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-sm p-6 bg-[#6b0b741f] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <CgPerformance
              style={{ fontSize: "xxx-large", color: "#00fffd" }}
            ></CgPerformance>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Optimization
              </h5>
            </a>
            <p className="mb-3 font-normal">
              Code Executing efficiency, thereby speeding up response times and
              improving the overall performance of the web application
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-sm p-6 bg-[#6b0b741f] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <GiProcessor
              style={{ fontSize: "xxx-large", color: "#00fffd" }}
            ></GiProcessor>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Back-End Development
              </h5>
            </a>
            <p className="mb-3 font-normal">
              Building and maintaining the server-side logic, databases, and
              APIs functionality and data processing of a web application
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-sm p-6 bg-[#0b65741f] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <DiCodeBadge
              style={{ fontSize: "xxx-large", color: "#00fffd" }}
            ></DiCodeBadge>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Translate Designs
              </h5>
            </a>
            <p className="mb-3 font-normal">
              Convert design concepts into code using the CSS
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
