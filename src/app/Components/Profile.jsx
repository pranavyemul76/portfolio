import Image from "next/image";
import React from "react";
import profile from "../../../public/profile.png";
import { IoLogoLinkedin } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialGithub } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { IoCalendarNumberOutline } from "react-icons/io5";

const Profile = () => {
  const onButtonClick = () => {
    const pdfUrl = "/pranav_ reume_ update_ 26052024.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="Innerline relative  p-5 flex-col flex gap-2  col-span-1 h-screen justify-center items-center  border  border-r-8  border-solid ">
        <div className="profile_image w-1/3 -mt-28 ">
          <Image src={profile} objectFit="contain" alt="profile"></Image>
        </div>
        <div className="profile_name font-semibold text-2xl">Pranav Yemul</div>
        <div className="profile_profession text-sm">MERN Stack Developer</div>
        <div className="social_link_container mt-2">
          <div className="social_links grid grid-flow-col gap-3">
            <div className="facebook text-3xl border border-solid p-1 bg-slate-50  text-blue-600/75">
              <SlSocialFacebook></SlSocialFacebook>
            </div>
            <div className="GitHub text-3xl border border-solid p-1 bg-slate-50 text-blue-600/75">
              <a href="https://github.com/pranavyemul76/" target="_blank">
                <TiSocialGithub></TiSocialGithub>
              </a>
            </div>
            <div className="instagram text-3xl border border-solid bg-slate-50 p-1 text-rose-600">
              <a
                href="https://www.instagram.com/journeyjoystories/"
                target="_blank"
              >
                <SlSocialInstagram></SlSocialInstagram>
              </a>
            </div>
            <div className="linkdin text-3xl border border-solid bg-slate-50 p-1 text-blue-600/75">
              <a
                href="https://www.linkedin.com/in/pranav-yemul-023bb6178"
                target="_blank"
              >
                <IoLogoLinkedin></IoLogoLinkedin>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="genaral_information_container mt-4">
          <div className="genaral_outerline bg-slate-50 border  border-none rounded-xl p-5 px-8">
            <div className="genaral_innerline">
              <div className="phone_container flex">
                <div className="phone_icon">
                  <FaPhone></FaPhone>
                </div>
                <div className="phone_number ml-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="relative mt-1 border-none pl-0 ">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      disabled
                      value={"+919049263174"}
                      className="block w-full border-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="phone_container flex ">
                <div className="phone_icon">
                  <MdEmail></MdEmail>
                </div>
                <div className="phone_number ml-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="relative mt-1 border-none pl-0 ">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      disabled
                      value={"pranavyemul76@gmail.com"}
                      className="block w-full border-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="phone_container flex ">
                <div className="phone_icon">
                  <GoLocation></GoLocation>
                </div>
                <div className="phone_number ml-4 ">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    location
                  </label>
                  <div className="relative mt-1 border-none pl-0 ">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      disabled
                      value={"Solapur,India"}
                      className="block w-full border-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="phone_container flex">
                <div className="phone_icon">
                  <IoCalendarNumberOutline></IoCalendarNumberOutline>
                </div>
                <div className="phone_number ml-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date of Birth
                  </label>
                  <div className="relative mt-1 border-none pl-0 ">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      disabled
                      value={"30/08/2000"}
                      className="block w-full border-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex align-middle justify-center Download_cv">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={onButtonClick}
          >
            Download CV
          </button>
        </div>
      </div>
    </>
  );
};
export default Profile;
