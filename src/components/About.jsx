import React from "react";
import "remixicon/fonts/remixicon.css";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      className="w-full z-10 relative bg-[#CDEA68] rounded-t-3xl"
    >
      <h1 className="custom-heading cursor-default font2 px-14 py-[7vw] pb-[3.5vw] text-[#212121] text-[3.6vw] w-[90%] leading-none">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex pr-14 border-t-[1px] border-[#8b9c49cc]">
        <div className="w-1/2">
          <h1 className="text-[3.5vw] cursor-default text-[#212121] font2 px-14 py-3 mb-[-10px]">
            Our approach:
          </h1>
          <button className=" font2 relative text-white btn flex gap-9 items-center bg-[#212121] ml-[3.5rem] rounded-full py-[1rem] px-6 uppercase">
            read more
            <div className="h-[.6rem] w-[.6rem] circle bg-white rounded-full"></div>
            <i class="ri-arrow-right-up-line absolute opacity-0 icon right-[18.5px] text-[1.5vw]"></i>
          </button>
        </div>
        <div className="w-1/2 mt-7 rounded-2xl h-[65vh] bg-[#a7bd57] overflow-hidden mb-12">
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
