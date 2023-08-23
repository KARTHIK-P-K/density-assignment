"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ahead10 from "@/images/ahead10.png";
import { motion, AnimatePresence } from "framer-motion";
import Box2 from "@/components/Box2";

const NinethSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHidden, setShowHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("target-section6");

      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(sectionTop < windowHeight / 2);
        setShowHidden(sectionTop < windowHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="p-2 md:p-4 lg:p-8">
      <div id="target-section6"></div>
      <div className="bg-violet-50 rounded-3xl h-[1200px] lg:h-[800px] p-4 md:p-8 lg:p-16">
        <div className="flex flex-col lg:flex-row lg:justify-between ">
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-5xl font-bold">Work with us</h1>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 150 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-blue-600 text-5xl font-bold">ahead</h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-10 xl:px-20">
          <div className=" ">
            <div className="flex flex-col gap-y-4 bg-white w-[300px] xl:w-[600px] h-[250px] p-6 rounded-2xl mt-10">
              <Image src={ahead10} width={50} height={50} alt="ahead10" />
              <h1 className="text-xl font-bold">About</h1>
              <p>
                At ahead our goal is to make self improvement fun and lasting.
                We know there is a way on how to make it.And thats what ahead is
                all about.
              </p>
            </div>
            <div className="flex  flex-col  gap-y-4 bg-amber-50 w-[300px] xl:w-[600px] h-[170px] p-6  ">
              <h1 className="text-xl font-bold">Product</h1>
              <p>
                At ahead our goal is to make self improvement fun and lasting.
                We know there is a way on how to make it.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 overflow-hidden mt-10">
            <Box2 showHidden={showHidden} />
            <Box2 showHidden={showHidden} />
            <Box2 showHidden={showHidden} />
            <Box2 showHidden={showHidden} />
            <Box2 showHidden={showHidden} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinethSection;
