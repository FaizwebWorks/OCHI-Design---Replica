import { motion } from "framer-motion";
import React from "react";
import "remixicon/fonts/remixicon.css";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.6"
      className="w-full h-[98vh] bg-[#f1f1f1] pt-2"
    >
      <div className="textstruture mt-[9.5vw] px-12 ">
        {["We create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="w-[8.8vw] ml-1 mr-3 h-[5.75vw] rounded-2xl bg-red-500 mt-[.9vw] bg-[url('https://cdn.dribbble.com/userupload/4483772/file/original-664ef3d87f30f40d100cc5e428cacc28.png?resize=1024x576&vertical=center')] bg-cover bg-center"
                  ></motion.div>
                )}
                <h1 className="fonts text-[#212121] cursor-default uppercase leading-[6.6vw] text-[9vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-400 mt-36 flex items-center justify-between pt-3 px-12">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md cursor-default font2 text-[#212121]">{item}</p>
        ))}
        <div className="right flex items-center">
          <div className="font2 text-[#212121] onhover cursor-pointer uppercase border border-[#212121] px-3 py-1 rounded-full">
            Start the project
          </div>
          <i className="ri-arrow-right-up-line onhover relative cursor-pointer flex items-center justify-center text-[#212121] rounded-full ml-1 text-[1.3vw] border border-[#212121] px-2 py-[3px]"></i>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
