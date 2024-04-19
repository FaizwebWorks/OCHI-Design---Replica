import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

function Playfull() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="relative w-full min-[100vh] pb-8 bg-[#CDEA68] rounded-3xl"
    >
      <div className=" absolute w-full h-full flex items-center justify-center gap-10">
        <div className="w-[14vw] h-[14vw] flex items-center justify-center bg-[#f4f4f4] rounded-full">
          <div className="w-[9vw] h-[9vw] relative overflow-hidden rounded-full bg-[#212121]">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line w-full h-6  absolute z-30 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="h-[1.5vw] w-[1.5vw] bg-[#f4f4f4] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[14vw] h-[14vw] flex items-center justify-center bg-[#f4f4f4] rounded-full">
          <div className="w-[9vw] h-[9vw] relative overflow-hidden rounded-full bg-[#212121]">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line w-full h-6  absolute z-30 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="h-[1.5vw] w-[1.5vw] bg-[#f4f4f4] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-[10vw]">
        <h1 className=" uppercase fonts leading-[11vw] tracking-[-2px] text-center text-[15vw] text-[#212121] ">
          Ready
        </h1>
        <h1 className=" uppercase fonts leading-[11vw] tracking-[-2px] text-center text-[15vw] text-[#212121]">
          To start
        </h1>
        <h1 className=" uppercase fonts leading-[11vw] tracking-[-2px] text-center text-[15vw] text-[#212121]">
          the project
        </h1>
      </div>
      <div className="flex items-center justify-center m-16">
        <button className="font2 relative btn uppercase flex items-center justify-center border-none gap-8 px-[1.7vw] py-[1.1vw] bg-[#212121] text-white rounded-full">
          start the project
          <div className="h-[9px] w-[9px] circle bg-[#f1f1f1] rounded-full"></div>
          <i class="ri-arrow-right-up-line absolute icon right-[1.4vw] opacity-0 text-[1.35vw]"></i>
        </button>
      </div>
    </div>
  );
}

export default Playfull;
