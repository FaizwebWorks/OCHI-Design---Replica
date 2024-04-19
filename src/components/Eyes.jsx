import React, { useEffect } from "react";
import { useState } from "react";

function Eyes() {
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
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="w-full h-full relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className=" absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[14vw] h-[14vw] flex items-center justify-center bg-[#F4F4F4] rounded-full ">
            <div className="w-[9vw] h-[9vw] relative bg-[#212121] rounded-full">
              <div className=" absolute font2 uppercase text-[1.4vw] text-[#f4f4f4] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                Play
              </div>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-6"
              >
                <div className="w-[1.5vw] h-[1.5vw] bg-[#F4F4F4] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] flex items-center justify-center bg-[#F4F4F4] rounded-full ">
            <div className="w-[9vw] h-[9vw] magnet-target relative bg-[#212121] rounded-full">
              <div className=" absolute font2 uppercase text-[1.4vw] text-[#f4f4f4] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                Play
              </div>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6"
              >
                <div className="w-[1.5vw] h-[1.5vw] bg-[#F4F4F4] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
