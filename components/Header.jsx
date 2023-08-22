"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ahead9 from "@/images/ahead9.png";

const Header = () => {
  return (
    <div className="w-full h-[120px] bg-white z-10  fixed ">
      <div className="flex justify-between items-center pt-8 px-8 xl:px-16 gap-12">
        <Image src={ahead9} alt="Logo Icon" width={70} height={70} />
        <div>
          <ul className="hidden md:flex items-center gap-2 md:gap-4 xl:gap-8 cursor-pointer">
            <li>Emotions</li>
            <li>Manifest</li>
            <li>Self-awareness test</li>
            <li>Work With Us</li>
          </ul>
        </div>
        <div>
          <button className="bg-black rounded-full  text-white px-2 md:px-4 xl:px-8 py-2 xl:py-4">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
