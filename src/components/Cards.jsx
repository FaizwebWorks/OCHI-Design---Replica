import React from "react";

function Cards() {
  return (
    <div className="w-full h-[80vh] pl-16">
      <div className="cardcontainer mt-32 flex items-center gap-4 w-full h-[52vh] ">
        <div className="card relative w-[45vw] h-full bg-[#004D43] rounded-2xl flex items-center justify-center">
          <img
            className="h-[4.5vw] object-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <div className="font2 cursor-default absolute text-[#CDEA68] left-0 bottom-0 mx-8 my-8 border-[1px] border-[#CDEA68] text-[1vw] px-3 py-[3px] rounded-full z-20">
            {" "}
            &copy;2019-2022{" "}
          </div>
        </div>
        <div className="card relative w-[21.6vw] h-full bg-[#212121] rounded-2xl flex items-center justify-center">
          <img
            className="h-[5vw] object-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <div className="font2 cursor-default hcard absolute uppercase text-[white] left-0 bottom-0 mx-8 my-8 border-[1px] text-[1vw] px-3 py-[3px] rounded-full z-20">
            Rating 5.0 on clutch
          </div>
        </div>
        <div className="card relative w-[21.6vw] h-full bg-[#212121] rounded-2xl flex items-center justify-center">
          <img
            className="h-[7vw] object-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <div className="font2 cursor-default hcard absolute uppercase text-[white] left-0 bottom-0 mx-8 my-8 border-[1px] text-[1vw] px-3 py-[3px] rounded-full z-20">
            business bootcamp alumini
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
