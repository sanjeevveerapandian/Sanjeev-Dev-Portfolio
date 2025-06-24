"use client";

import { skillsData } from "@/data/skills";
import { skillsImage } from "@/data/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-50 my-12 lg:my-24 border-t border-[#352514]"
    >
      {/* Decorative Glow */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] bg-violet-200 opacity-20 blur-3xl rounded-full" />

      {/* Gradient Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent w-full" />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-center py-10">
        <h2 className="heading text-white text-3xl sm:text-4xl font-bold text-center">
          My <span className="text-orange-400">Skills</span>
        </h2>
      </div>

      {/* Marquee Skill Cards */}
      <div className="w-full mt-10 mb-12">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover
          className="flex gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="m-3 sm:m-5"
            >
              <div className="w-32 sm:w-36 h-32 sm:h-36 bg-gradient-to-br from-[#1f223c] to-[#11152c] border border-[#2a2d4a] backdrop-blur-md rounded-2xl shadow-md hover:shadow-purple-600/30 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center">
                <div className="h-10 sm:h-12">
                  <Image
                    src={skillsImage(skill)?.src || ""}
                    alt={skill}
                    width={48}
                    height={48}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="text-sm sm:text-base mt-3 text-white font-medium">
                  {skill}
                </p>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
