"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Box = ({ showHidden }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: showHidden ? -500 : 0, opacity: showHidden ? 1 : 0 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className={`w-[350px] h-[200px] p-4 bg-white rounded-xl`}>
          <div>
            <h1 className="text-md font-semibold mb-2">
              Power through, even when the going gets tough
            </h1>
            <p>
              We help you spot and work around whatever stands in the way , be
              it bad habits ,fears etc.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Box;
