"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ahead7 from "@/images/ahead7.png";
import { motion, AnimatePresence } from "framer-motion";

const FourthSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("target-section2");

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
    <div className="  p-8 mt-6 ">
      <div className="bg-orange-50 h-full rounded-3xl border py-20 px-28 ">
        <div id="target-section2"></div>
        <div>
          {isVisible && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="text-xl">Built out of frustration</p>
              <h1 className="mt-10  text-4xl lg:text-6xl font-bold">
                Meet the ahead app
              </h1>
            </motion.div>
          )}
        </div>
        <div className="mt-20 flex flex-col lg:flex-row justify-around gap-10">
          <div className="border-8 max-w-[300px] border-white rounded-full p-8">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3 }}
            >
              <Image src={ahead7} alt="ahead7" width={100} height={100} />
            </motion.div>
          </div>

          {isVisible && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-[500px]">
                <p className="text-xl">
                  A personalised pocket coach that provides bite-sized , science
                  driven tools to boost emotional intelligence.
                </p>
                <br />
                <p className="text-xl">
                  Think of it as a pocket cheerleader towards a better, more
                  fulfilling
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
