"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SeventhSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("target-section4");

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
    <div className="p-8">
      <div id="target-section4"></div>
      <div className="rounded-3xl bg-blue-50 flex flex-col items-center justify-center gap-8 h-[800px] xl:h-[600px]">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-xl">
                Let your friends , family and coworkers (Anonymously) rate your
                social skills
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="text"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-6xl font-bold">
                Ever wondered what others think of you ?
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="hidden md:flex gap-16 w-full justify-center">
          <div className="flex flex-col gap-y-4 items-center">
            <div className="rounded-full relative w-12 h-12 text-white border-8 border-amber-700 bg-amber-600 flex justify-center items-center">
              1
              <div
                className="absolute top-1/2 left-full transform -translate-y-1/2"
                style={{ width: "275px", border: "2px dashed  brown" }}
              ></div>
            </div>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, marginBottom: 0 }}
                  exit={{ opacity: 0, marginBottom: 0 }}
                  transition={{ duration: 1, ease: "linear" }}
                >
                  <p className="max-w-[250px]">
                    Answer questions on social skill
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-y-4  items-center">
            <div className="rounded-full relative w-12 h-12 text-white border-8 border-amber-700 bg-amber-600 flex justify-center items-center">
              2
              <div
                className="absolute top-1/2 left-full transform -translate-y-1/2"
                style={{ width: "275px", border: "2px dashed  brown" }}
              ></div>
            </div>

            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, marginBottom: 0 }}
                  exit={{ opacity: 0, marginBottom: 0 }}
                  transition={{ duration: 1, ease: "linear" }}
                >
                  <p className="max-w-[250px]">
                    let others anonymously answer questions about you
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-y-4 items-center">
            <div className="rounded-full w-12 h-12 text-white border-8 border-amber-700 bg-amber-600 flex justify-center items-center">
              3
            </div>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, marginBottom: 0 }}
                  exit={{ opacity: 0, marginBottom: 0 }}
                  transition={{ duration: 1, ease: "linear" }}
                >
                  <p className="max-w-[250px]">
                    Find out where you and others see things the same way - and
                    where not
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="bg-white w-full md:w-[650px] h-[200px] rounded-lg relative hidden md:flex justify-center items-center">
          <div className="w-full md:w-[500px] h-[1px] bg-slate-400 relative">
            <div className="absolute top-[-7px] z-10 left-0 w-4 h-4 rounded-full bg-blue-900"></div>
            <div className="absolute top-[-7px] z-10 left-32 w-4 h-4 rounded-full bg-blue-400"></div>
            <div className="absolute top-[-7px] z-10 left-96 w-4 h-4 rounded-full bg-amber-500"></div>
            <div className="absolute top-[-7px] z-10 right-0 w-4 h-4 rounded-full bg-green-500"></div>
          </div>

          <div className="absolute left-10 p-1 top-10 rounded-lg bg-blue-900 w-14 h-10 flex items-center justify-center text-white">
            You
          </div>

          <div className="absolute left-44 p-1 bottom-10 rounded-lg bg-blue-400 w-36 h-10 flex items-center justify-center text-white">
            Anonymonos 1
          </div>

          <div className="absolute right-28 p-1 top-10 rounded-lg bg-amber-500 w-36 h-10 flex items-center justify-center text-white">
            Anonymonos 2
          </div>

          <div className="absolute right-0 bottom-10 p-1 rounded-lg bg-green-500 w-36 h-10 flex items-center justify-center text-white">
            Anonymonos 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
