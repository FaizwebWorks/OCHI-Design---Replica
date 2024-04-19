import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.4"
      className="w-full py-[7vw] relative bg-[#004D43] pb-48 rounded-t-3xl"
    >
      <div className="text border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="fonts cursor-default text-white text-[28vw] whitespace-nowrap uppercase leading-[20vw] pr-20 mb-5 -mt-6"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="fonts cursor-default text-white text-[28vw] whitespace-nowrap uppercase leading-[20vw] pr-20 mb-5 -mt-6"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
