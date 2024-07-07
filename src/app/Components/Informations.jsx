import React, { useState } from "react";
import Projects from "./Projects";
import Resume from "./Resume";
import About from "./About";
import Profile from "./Profile";
const Information = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scroll down
      if (currentPage < 3) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      // Scroll up
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    }
  };
  return (
    <>
      <div className="outerline container mx-auto grid grid-cols-1 md:grid-cols-3">
        <Profile></Profile>
        <div
          onWheel={handleScroll}
          className="col-span-2 sm:h-screen sm:overflow-hidden"
        >
          <div
            className="flex flex-col transition-transform duration-1000"
            style={{ transform: `translateY(-${currentPage * 100}vh)` }}
          >
            <div
              className={`col-span-2 sm:min-h-screen w-full p-3 sm:p-16 transition-opacity duration-700 animate-fadeInDown`}
            >
              <About></About>
            </div>
            <div className="col-span-2  sm:min-h-screen w-full p-3 sm:p-16 transition-opacity duration-700 animate-fadeInDown">
              <Resume></Resume>
            </div>
            <div className="col-span-2  sm:min-h-screen w-full p-3  sm:p-16 transition-opacity duration-700 animate-fadeInDown ">
              <div>
                <h2 className="text-4xl mb-4 font-extrabold dark:text-white">
                  Projects
                </h2>
                <div>
                  <Projects></Projects>
                </div>
              </div>
            </div>
            <div className="col-span-2  sm:min-h-screen w-full p-3 sm:p-16 transition-opacity duration-700 animate-fadeInDown">
              <div>
                <h2 className="text-4xl font-bold dark:text-white">
                  certification and awards
                </h2>
                <hr className="my-2"></hr>
                <div>
                  <div class="grid grid-cols-2 my-8  md:grid-cols-1 gap-4">
                    <img src={"edureka.png"} alt="none" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
