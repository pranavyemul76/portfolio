import React from "react";
/*
 */
const Features = [
  "Secure login mechanisms JWT",
  " Create RESTful endpoints for products, orders, users, and reviews.",
  "Implement authentication and authorization middleware.",
  " Personal information management",
  "Order history and tracking",
  " Product categories and filters",
  " Advanced search capabilities",
  "Order summary and confirmation",
  "Multiple payment options",
  "Shipping and billing address management",
];
const Projects = () => {
  return (
    <>
      <div>
        <h2 class="text-2xl font-extrabold dark:text-white">
          E-commerce Web Application
        </h2>
        <hr className="my-1"></hr>
        <div>
          <div className="flex justify-between items-center">
            <p class="text-2xl text-gray-900 dark:text-white mr-auto">
              MERN Stack Technology
            </p>
            <span className="inline-block tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">
              2022 - 2023
            </span>
          </div>
          <a
            href="https://deployments-eta.vercel.app/"
            target="_blank"
            class="inline-flex font-medium text-[20px]  items-center text-blue-600 hover:underline my-4"
          >
            Live Demo
            <svg
              class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
        <div className="my-4">
          <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
            {Features.map((item) => {
              return (
                <li class="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Projects;
/* <div class="grid my-8 gap-4  border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        <div class=" my-8  border border-gray-200 rounded-lg shadow-sm">1</div>
        <div class=" my-8  border border-gray-200 rounded-lg shadow-sm">2</div>
        <div class=" my-8  border border-gray-200 rounded-lg shadow-sm">3</div>
        <div class=" my-8  border border-gray-200 rounded-lg shadow-sm">4</div>
      </div> */
