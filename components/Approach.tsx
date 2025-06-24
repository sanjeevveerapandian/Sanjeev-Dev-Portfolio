"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    title: "Hackathon – VIT Innovation Challenge",
    date: "2024",
    desc: "Selected in Top 20 teams. Built a mobile app that connects patients with ambulance drivers and navigates them to the nearest hospital with the choice of Government or Private.",
    icon: FaTrophy,
  },
  {
    id: 2,
    title: "Ideathon – Panimalar Engineering College",
    date: "2022",
    desc: "Secured Top 9 position and received a cash prize for proposing a mobile application idea to connect harvesters directly with large-scale markets, eliminating middlemen.",
    icon: FaTrophy,
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Decorative Line Above */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent w-full" />
        </div>
      </div>

      <section ref={ref} className="py-24 px-4 sm:px-8 text-white">
        <h2 className="text-center text-4xl font-bold tracking-tight mb-20">
          My <span className="text-orange-400">Achievements</span>
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            style={{ height: timelineHeight }}
            className="absolute top-0 left-1/2 w-[4px] -translate-x-1/2 z-0 rounded-full
              bg-[linear-gradient(to_bottom,_#f59e0b,_#fbbf24,_#fde68a)]
              shadow-[0_0_25px_6px_rgba(253,186,116,0.3)]
              animate-glow"
          />

          <div className="flex flex-col gap-20 relative z-10">
            {achievements.map((item, index) => {
              const alignLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row ${
                    alignLeft
                      ? "lg:items-end lg:justify-start"
                      : "lg:items-start lg:justify-end"
                  } gap-6`}
                >
                  {/* Connector Branch */}
                  <div
                    className={`absolute top-6 w-[50%] h-[2px] bg-gradient-to-r ${
                      alignLeft
                        ? "right-1/2 from-orange-400 to-transparent"
                        : "left-1/2 from-transparent to-orange-400"
                    }`}
                  />

                  {/* Dot at branch */}
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-300 border-4 border-white rounded-full z-10 shadow-lg" />

                  {/* Content */}
                  <div
                    className={`w-full lg:w-[45%] ${
                      alignLeft ? "lg:pr-10 text-left" : "lg:pl-10 text-left"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <item.icon className="w-10 h-10 text-orange-400" />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-1">
                          {item.date}
                        </p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
