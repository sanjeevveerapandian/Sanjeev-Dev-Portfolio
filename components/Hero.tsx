import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 bg-black-100 text-white" id="/">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
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

      {/**
       *  UI: Grid Background
       *  Change the background to dark grid with low opacity
       */}
      <div className="h-screen w-full dark:bg-black-100 bg-black-100 absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for dark background effect */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/**
       *  UI: Dark Grid
       *  Change grid background and opacity for dark mode
       */}
      <div className="h-screen w-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Transforming Ideas into Code !
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *  Update text size for better responsiveness in dark mode
           */}
          <TextGenerateEffect
            words="Hi! I'm Sanjeev Veerapandian, a Full-Stack Developer"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-50">
            Passionate about writing clean, efficient code.
          </p>
          <div className="flex items-center md:gap-3 gap-6 pt-4">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link} // Link to the respective social media
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security measure
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 hover:bg-purple-500"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1rvX0_TN3d82cK8n3Wu41krgrWDlhZqwZ/view"
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
  );
};

  


export default Hero;
