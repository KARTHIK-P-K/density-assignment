"use client";

import React from "react";
import { motion } from "framer-motion";
import ahead6 from "@/images/ahead6.png";
import Image from "next/image";

const ShakingIcon = () => {
  const iconVariants = {
    start: {
      opacity: 0,
      x: 0,
      y: 0,
    },
    end: {
      opacity: 1,
      x: 100,
      y: 100,
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  return (
    <div className="icon-container">
      <motion.div
        variants={iconVariants}
        initial="start"
        animate="end"
        style={{
          position: "relative", // Ensure child positioning works
          width: "100px", // Adjust based on your image dimensions
          height: "100px", // Adjust based on your image dimensions
        }}
      >
        <Image src={ahead6} alt="Weird Motion Icon" layout="fill" />
      </motion.div>
    </div>
  );
};

export default ShakingIcon;
