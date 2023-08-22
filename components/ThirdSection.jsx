"use client";

import React, { useState, useEffect } from "react";
import ahead3 from "@/images/ahead3.png";
import Image from "next/image";
import Box from "./Box";
import { motion, AnimatePresence } from "framer-motion";

const ThirdSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHidden, setShowHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("target-section");

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
    <div className="px-8 h-[500px]">
      <div id="target-section"></div>
      {isVisible && (
        <div className="flex gap-2 lg:gap-8">
          <h1 className="text-3xl lg:text-5xl font-bold">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Does this sound familiar...
            </motion.div>
          </h1>

          <Image src={ahead3} alt="familar" width={50} height={50} />
        </div>
      )}
      <div className="flex gap-4 overflow-hidden mt-14">
        <Box showHidden={showHidden} color={"blue"} emoji={"😉"} />
        <Box showHidden={showHidden} color={"red"} emoji={"😒"} />
        <Box showHidden={showHidden} color={"green"} emoji={"😔"} />
        <Box showHidden={showHidden} color={"amber"} emoji={" 🙄 "} />
        <Box showHidden={showHidden} color={"violet"} emoji={"☹️"} />
        <Box showHidden={showHidden} color={"orange"} emoji={"😃"} />
      </div>
    </div>
  );
};

export default ThirdSection;
