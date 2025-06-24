"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 bg-black-100 text-white" id="/">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background overlays */}
      <div className="h-screen w-full dark:bg-black-100 bg-black-100 absolute top-0 left-0 flex items-center justify-center">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="h-screen w-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Intro Line */}
          <p className="text-sm md:text-base text-center text-blue-100 mb-3">
            Hi, I’m
          </p>

          {/* Name with smooth transition */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-[34px] md:text-5xl lg:text-6xl font-semibold mb-2"
          >
            Sanjeev <span className="text-orange-400">Veerapandian</span>
          </motion.h1>

          {/* Typing role */}
          <TextGenerateEffect
            className="text-center text-lg md:text-xl font-medium mt-2"
            textClassName=""
            words="Full-Stack Developer"
          />

          {/* Social Media */}
          <div className="flex items-center md:gap-3 gap-6 pt-6">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center
                  backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
                  rounded-lg border border-black-300 transition-all duration-300
                  hover:bg-purple-600 hover:scale-110 hover:shadow-lg hover:border-purple-400"
              >
                <img
                  src={info.img}
                  alt="icon"
                  width={20}
                  height={20}
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1PyS1Yedsw-OQ8zK6Y4wu_8tC6WgSX6mx/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="View Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
