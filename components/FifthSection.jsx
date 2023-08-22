"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ahead8 from "@/images/ahead8.png";
import { motion, AnimatePresence } from "framer-motion";

const FifthSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("target-section3");

      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(sectionTop < windowHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="py-8 px-14">
      <div id="target-section3"></div>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <p className="text-lg lg:text-xl">
              Work with self improvement & how we are fixing it.
            </p>
            <div className="flex gap-4 items-center">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Self-Improvement.Ugh.
              </h1>
              <Image src={ahead8} alt="ahead8" width={70} height={70} />
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex justify-center mt-10 gap-8">
        <div className="flex justify-center items-center h-full">
          <div className="w-1 bg-blue-500  h-[900px] lg:h-[490px]"></div>
        </div>
        <div className="flex flex-col mt-4 gap-4 text-slate-400 ">
          <div className="max-w-[600px] hover:text-black">
            <h1 className="text-2xl font-semibold">Its not easy as 1-2-3</h1>
            <p className="mt-4">
              The Journey of change may be long , but our sessions are short. We
              get to the point and tell you what you want to know( and nothing
              else).
            </p>
          </div>
          <div className="max-w-[600px] hover:text-black">
            <h1 className="text-2xl font-semibold">
              Old habits are hard to break
            </h1>
            <p className="mt-4">
              And bad behaviours die hard.Fortunately we give you great, science
              backed techniques to use.
            </p>
          </div>
          <div className="max-w-[600px] hover:text-black">
            <h1 className="text-2xl font-semibold">
              You and your motivation don't have a long term motivation
            </h1>
            <p className="mt-4">
              Luckily , we can proactively prepare you for the marathon,not just
              the race. Effective memorable exercises will help youstick to your
              goals.
            </p>
          </div>
          <div className="max-w-[600px] hover:text-black">
            <h1 className="text-2xl font-semibold">
              Books just don't offer practical solutions
            </h1>
            <p className="mt-4">
              Remember when you learn to ride a bike just by reading ? Yeah we
              don't either.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
