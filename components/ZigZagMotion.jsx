import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ahead5 from "@/images/ahead5.png";

const ZigZagMotionIcon = () => {
  const zigZagVariants = {
    start: {
      x: 0,
      y: 0,
    },
    end: {
      x: [0, 50, 0, -50, 0],
      y: [0, 50, 100, 50, 0],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="icon-container">
      <motion.div
        variants={zigZagVariants}
        initial="start"
        animate="end"
        style={{
          position: "relative", // Ensure child positioning works
          width: "100px", // Adjust based on your image dimensions
          height: "100px", // Adjust based on your image dimensions
        }}
      >
        <Image src={ahead5} alt="ZigZag Motion Icon" layout="fill" />
      </motion.div>
    </div>
  );
};

export default ZigZagMotionIcon;
