import React from "react";

const Skils = () => {
  const Components = ({ Title, Percentage }) => {
    return (
      <div className="my-4" key={Title}>
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            {Title}
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            {Percentage}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
            style={{ width: `${Percentage}%` || "0%" }}
          ></div>
        </div>
      </div>
    );
  };
  const SkillSet = [
    {
      Title: "JavaScript",
      Percentage: 70,
    },
    {
      Title: "ReactJs",
      Percentage: 80,
    },
    {
      Title: "NodeJs",
      Percentage: 50,
    },
    {
      Title: "HTML",
      Percentage: 70,
    },
    {
      Title: "CSS",
      Percentage: 70,
    },
  ];
  return (
    <>
      <h2 className="text-2xl font-extrabold dark:text-white mt-4">Skills</h2>
      <hr className="my-3"></hr>
      <div>
        {SkillSet.map((item, key) => {
          return <Components key={key} {...item}></Components>;
        })}
      </div>
    </>
  );
};
export default Skils;
