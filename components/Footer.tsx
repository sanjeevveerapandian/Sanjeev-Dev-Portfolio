import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{/* Your main content goes here */}</main>

      <footer className="w-full pb-4 mb-0 md:md-5" id="contact">
        <div className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
          {/* Background Glow */}
          <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

          {/* Gradient Separator */}
          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-3/4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[30vw] text-white-100">
            Looking for an opportunity to contribute to{" "}
            <span className="text-purple">your</span> digital presence?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            As a passionate student and aspiring developer, I&apos;m eager to
            bring your ideas to life with fresh solutions.
          </p>
          <a href="mailto:sanjeevveerapandian@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light text-white-100">
             © 2025 Developed by Sanjeev Veerapandian
          </p>

          <div className="flex items-center gap-6 pt-4">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 hover:bg-purple-500"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
