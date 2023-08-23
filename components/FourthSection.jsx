"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ahead7 from "@/images/ahead7.png";
import { motion, AnimatePresence } from "framer-motion";
import leaf from "@/images/leaf.png";
import flower from "@/images/flower.png";

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
    <div className="  px-2 py-8 lg:p-8 mt-6 ">
      <div className="bg-orange-50 h-full rounded-3xl border py-20 px-14 lg:px-28 relative ">
        <div id="target-section2"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 5, // Time for one rotation
            ease: "easeOut",
          }}
        >
          <Image
            className="absolute right-20 top-15"
            src={leaf}
            width={50}
            height={50}
            alt="leaf"
          />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 5, // Time for one rotation
            ease: "easeOut",
          }}
        >
          <Image
            className="absolute left-20 top-70"
            src={flower}
            width={50}
            height={50}
            alt="leaf"
          />
        </motion.div>

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
          <div className="border-8 lg:max-w-[300px] border-white rounded-full p-8">
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
              <div className="max-w-[500px] text-slate-700">
                <p className="text-sm  lg:text-xl">
                  A personalised pocket coach that provides bite-sized , science
                  driven tools to boost emotional intelligence.
                </p>
                <br />
                <p className="text-sm lg:text-xl">
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
