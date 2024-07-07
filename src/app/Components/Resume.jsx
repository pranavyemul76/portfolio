import React from "react";
import Skils from "./Skills";

const Resume = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold dark:text-white mb-8">Resume</h2>
      <div className="grid grid-cols-1 grid-rows-1 gap-7">
        <div>
          <h2 className="text-2xl font-extrabold dark:text-white">Education</h2>
          <hr className="my-1"></hr>
          <div>
            <p className="text-2xl text-gray-900 dark:text-white">
              Bachelor of Computer Application , Bharati Vidyapeeth University,
              Pune.
            </p>
            <p className="text-base text-gray-900 dark:text-white">
              2019 - 2022
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold dark:text-white">
            Experience
          </h2>
          <hr className="my-2"></hr>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-2xl text-gray-900 dark:text-white mr-auto">
                Full Stack Developer
              </p>
              <span className="inline-block tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">
                Jan 2023 - May 2024
              </span>
            </div>
            <p className="text-base text-gray-900 dark:text-white">
              LegitBytes, Mohali
            </p>
          </div>
        </div>
      </div>
      <Skils></Skils>
    </div>
  );
};
export default Resume;
