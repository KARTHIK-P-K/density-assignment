"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Apple from "@/images/apple.png";
import ahead9 from "@/images/ahead9.png";
import Image from "next/image";
import map from "@/images/map.png";
import message from "@/images/message.png";

const TenthSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("target-section10");

      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(sectionTop < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-8 lg:p-16 mt-20">
      <div className="flex flex-col">
        <div id="target-section10"></div>

        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 50 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <h1 className="text-5xl font-bold">Open vacancies</h1>
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div
            className="w-[400px] hover:h-[300px] h-[200px] hover:bg-amber-100 cursor-pointer bg-amber-50 py-8 px-4 rounded-2xl "
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={() => setIsHovered(0)}
          >
            <h1 className="text-xl font-bold mb-4">
              Senior Full Stack Developer
            </h1>
            <ul className="list-disc ml-4 flex flex-col gap-2">
              <li className="text-md font-medium">Full time position</li>
              <li className="text-md font-medium">Berlin or remote</li>
              <li className="text-md font-medium">
                $65k-$85k , 0.5-1.5% equity share options
              </li>
            </ul>
            {isHovered == 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <button className="rounded-3xl bg-black text-white p-4 text-centerfont-bold mx-auto mt-4">
                  See details
                </button>
              </motion.div>
            )}
          </div>
          <div
            className="w-[400px] hover:h-[300px] h-[200px] hover:bg-amber-100 cursor-pointer bg-amber-50 py-8 px-4 rounded-2xl "
            onMouseEnter={() => setIsHovered(2)}
            onMouseLeave={() => setIsHovered(0)}
          >
            <h1 className="text-xl font-bold mb-4">Senior Designer</h1>
            <ul className="list-disc ml-4 flex flex-col gap-2">
              <li className="text-md font-medium">Full time position</li>
              <li className="text-md font-medium">Berlin or remote</li>
              <li className="text-md font-medium">
                $55k-$75k , 0.5-1.5% equity share options
              </li>
            </ul>
            {isHovered == 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <button className="rounded-3xl bg-black text-white p-4 text-centerfont-bold mx-auto mt-4">
                  See details
                </button>
              </motion.div>
            )}
          </div>
          <div
            className="w-[400px] hover:h-[300px] h-[200px] hover:bg-amber-100 cursor-pointer bg-amber-50 py-8 px-4 rounded-2xl "
            onMouseEnter={() => setIsHovered(3)}
            onMouseLeave={() => setIsHovered(0)}
          >
            <h1 className="text-xl font-bold mb-4">Superstar Intern</h1>
            <ul className="list-disc ml-4 flex flex-col gap-2">
              <li className="text-md font-medium">Full time position</li>
              <li className="text-md font-medium">Berlin or remote</li>
              <li className="text-md font-medium">
                $65k-$85k , 0.5-1.5% equity share options
              </li>
            </ul>
            {isHovered == 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <button className="rounded-3xl bg-black text-white p-4 text-center font-bold mx-auto mt-4">
                  See details
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-slate-400 w-full mt-40 h-[1px] border"></div>
      <div className="mt-20 flex flex-col justify-center gap-4 items-center">
        <Image src={ahead9} width={100} height={100} alt="logo" />
        <h1 className="text-3xl font-bold text-violet-500 text-center">
          ahead
        </h1>
        <div className="flex gap-8 lg:gap-[150px]  ">
          <div className="flex gap-2 justify-center items-center">
            <Image src={map} width={40} height={40} alt="map" />
            <p>AuguststaBe 26 , 10117 Berlin</p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Image src={message} width={40} height={40} alt="message" />
            <p>hi@ahead.com</p>
          </div>
        </div>
        <button className="text-white bg-black px-2 rounded-lg flex items-center max-w-[180px]">
          <Image src={Apple} alt="apple logo" width={40} height={40} />
          <div className="flex flex-col ">
            <p className="text-sm text-slate-300 ">Download on </p>
            <h1 className=" lg:text-xl">App Store</h1>
          </div>
        </button>

        <p className="text-slate-400">@2022 Ahead app. All right reserved</p>
      </div>
    </div>
  );
};

export default TenthSection;
