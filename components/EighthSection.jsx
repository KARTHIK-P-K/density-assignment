"use client";
import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

const EighthSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textToType = "Team Ahead";

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("target-section5");

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
    <div className="my-40 p-8 ">
      <div id="target-section5"></div>

      <div className="flex flex-col justify-center items-center gap-y-3  ">
        <p className="text-md">We take your privacy seriously</p>
        <h1 className="font-bold text-3xl text-center">
          Before you get started{" "}
        </h1>
        <p className="text-lg text-center text-slate-800">
          "We won't share your answers with anyone (and won't tell you <br />
          which friends said what about you)"
        </p>
        <div>
          With Love,
          <div>
            {isVisible && (
              <div className="flex font-mono italic">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="text-2xl font-semibold"
                >
                  {textToType}
                </motion.p>
              </div>
            )}
          </div>
        </div>
        {isVisible && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, marginBottom: 0 }}
              animate={{ opacity: 1, marginBottom: 0 }}
              transition={{ duration: 2, ease: "linear" }}
            >
              <button className="bg-black rounded-3xl py-2 px-4 text-sm text-white">
                Start a test
              </button>
            </motion.div>
          </AnimatePresence>
        )}
        <p className="text-[10px]">Take only 5 minutes</p>
      </div>
    </div>
  );
};

export default EighthSection;
