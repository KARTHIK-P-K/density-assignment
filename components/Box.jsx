"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Box = ({ showHidden, color }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: showHidden ? -1000 : 0, opacity: showHidden ? 1 : 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`min-w-[400px] h-[200px] p-4 bg-${color}-200 rounded-lg`}
        >
          <div>
            <div>😠</div>
            <h1 className="text-md font-semibold mb-2">
              You Argue with a colleague
            </h1>
            <p>
              You get angry and defensive , instead of staying open and working
              towards common ground
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Box;
