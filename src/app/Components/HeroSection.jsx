"use client";
import "../UI/style.css";
import React from "react";
import style from "../UI/Home.module.css";
const HeroSection = () => {
  return (
    <>
      <section>
        <div className="outer h-screen">
          <div className="inner h-screen">
            <div className="bg home flex justify-around  align-middle gap-2 ">
              <div className="w-6/12 p-8  text-white scroll place">
                <p className={style.name}>Hello! I'm Pranav Yemul</p>
                <p>A Nostalgic Journey</p>
              </div>
              <div className="w-6/12">
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a34a77e4-37e3-420d-b207-b2aa43b98f1a"
                  alt="profile_image"
                  className="w-10/12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
{
  /* <ul className="links">
<li>
  <a href="#">-apple</a>
</li>
<li>
  <a href="#">-google</a>
</li>
<li>
  <a href="#">-youtube</a>
</li>
<li>
  <a href="#">-instagram</a>
</li>
</ul> */
}
