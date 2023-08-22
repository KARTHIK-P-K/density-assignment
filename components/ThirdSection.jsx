"use client";

import React from "react";
import ahead3 from "@/images/ahead3.png";
import Image from "next/image";
import { motion } from "framer-motion";

const ThirdSection = () => {
  return (
    <div className="px-8 h-[500px]">
      <div className="flex gap-2 lg:gap-8">
        <h1 className="text-3xl lg:text-5xl font-bold">
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            Does this sound familiar...
          </motion.div>
        </h1>

        <Image src={ahead3} alt="familar" width={50} height={50} />
      </div>
      <div className="flex gap-4"></div>
    </div>
  );
};

export default ThirdSection;
