"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import Apple from "@/images/apple.png";
import Phone from "@/images/phone.png";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import ZigZagMotionIcon from "@/components/ZigZagMotion";
import ahead1 from "@/images/ahead1.png";
import ShakingIcon from "./ShakingIcon";
import ahead4 from "@/images/ahead4.png";

const Main = () => {
  return (
    <div className="px-8 ">
      <div className="rounded-3xl  w-full h-[650px] border px-10 bg-violet-50 flex gap-10 items-center justify-around">
        <div className="absolute left-0 top-10">
          <ShakingIcon />
        </div>
        <div className="absolute left-0 right-0 bottom-10">
          <ZigZagMotionIcon />
        </div>
        <div className="flex flex-col gap-y-12">
          <p className="font-bold text-xl">Ahead App</p>
          <h1 className=" text-3xl md:text-5xl lg:text-7xl font-bold">
            Master your life <br /> by mastering <br /> emotions
          </h1>
          <div className="flex flex-col lg:flex-row gap-4 ">
            <button className="text-white bg-black px-2 rounded-lg flex items-center max-w-[160px]">
              <Image src={Apple} alt="apple logo" width={40} height={40} />
              <div className="flex flex-col ">
                <p className="text-sm text-slate-300 ">Download on </p>
                <h1 className=" lg:text-xl">App Store</h1>
              </div>
            </button>
            <div className="flex flex-col">
              <StarRating />
              <p className="text-slate-600">100+ Appstore reviews</p>
            </div>
          </div>
        </div>
        <div className=" ">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              //  repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image src={ahead4} alt="ahead4" width={100} height={100} />
          </motion.div>

          <Image src={Phone} alt="phone" width={150} height={200} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              // repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image src={ahead1} alt="ahead1" width={100} height={100} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
