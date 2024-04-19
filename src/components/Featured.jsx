import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full  pt-28 rounded-3xl">
      <div className="w-full px-16 pb-10 rounded-2xl border-b-[2px] border-[#ababab7b]">
        <h1 className="text-[3.5vw] cursor-default font2">Featured projects</h1>
      </div>
      <div className="px-16">
        <div className="cards w-full flex gap-5 mt-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="relative cardscontainer w-1/2 h-[75vh]"
          >
            <h1 className="absolute cursor-default left-full overflow-hidden flex -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-10 fonts tracking-[-1.5px] leading-[8vw] text-[8.8vw]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card animation w-full hover:scale-[.96] cursor-default h-full rounded-xl overflow-hidden bg-green-600">
              <img
                className="h-full anim2 w-full hover:scale-[1.11] object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="relative cardscontainer w-1/2 h-[75vh]"
          >
            <h1 className="absolute cursor-default flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-10 fonts tracking-[-1.5px] leading-[8vw] text-[8.8vw]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card animation hover:scale-[.96] w-full h-full overflow-hidden rounded-xl bg-green-600">
              <img
                className="h-full anim2 w-full hover:scale-[1.11] object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-16">
        <div className="cards w-full flex gap-5 mt-6">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="relative cardscontainer w-1/2 h-[75vh]"
          >
            <h1 className="absolute cursor-default left-full overflow-hidden flex -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-10 fonts tracking-[-1.5px] leading-[8vw] text-[8.8vw]">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card animation hover:scale-[.96] w-full h-full rounded-xl overflow-hidden bg-green-600">
              <img
                className="h-full w-full anim2 hover:scale-[1.11] object-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="relative cardscontainer w-1/2 h-[75vh]"
          >
            <h1 className="absolute cursor-default flex overflow-hidden right-full whitespace-nowrap translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-10 fonts tracking-[-1.5px] leading-[8vw] text-[8.8vw]">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card animation hover:scale-[.96] w-full h-full overflow-hidden rounded-xl bg-green-600">
              <img
                className="h-full anim2 w-full hover:scale-[1.11] object-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <button className="font2 uppercase btn relative cursor-default flex items-center justify-center border-none gap-8 px-[1.5vw] py-[1vw] bg-[#212121] text-white rounded-full">
          View all case studies
          <div className="h-[10px] w-[10px] circle2 bg-[#f1f1f1] rounded-full"></div>
          <i class="ri-arrow-right-up-line absolute icon opacity-0 right-[1.03vw] mt-[3px] text-[1.5vw]"></i>
        </button>
      </div>
    </div>
  );
}

export default Featured;
