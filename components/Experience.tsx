"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLaptopCode, FaUserGraduate, FaSchool } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const workExperience = [
  {
    id: 1,
    title: "Part-time Developer – Ogrelix (Current)",
    desc: "Since September 2024, contributing to production-level features, fixing bugs, enhancing UI/UX, and integrating REST APIs. Collaborating closely with the product team to improve platform reliability.",
    period: "Sept 2024 – Present",
    icon: <MdWork className="text-2xl text-orange-400" />,
  },
  {
    id: 2,
    title: "Frontend Intern – KANINI Software Solutions",
    desc: "Completed a 1-month internship in July 2024. Built reusable components using React.js and Bootstrap in the Product Engineering Department.",
    period: "July 2024",
    icon: <FaLaptopCode className="text-2xl text-orange-400" />,
  },
  {
    id: 3,
    title: "Full-Stack Intern – Ogrelix",
    desc: "Developed a full-stack web application using React.js, Laravel, and MySQL. Focused on frontend dashboard and backend logic for a service-based electronics company.",
    period: "June 2024",
    icon: <FaLaptopCode className="text-2xl text-orange-400" />,
  },
  {
    id: 4,
    title: "B.E. Computer Science – Panimalar Engineering College",
    desc: "Pursuing Bachelor of Engineering in Computer Science and Engineering.",
    period: "2022 – 2026",
    icon: <FaUserGraduate className="text-2xl text-orange-400" />,
  },
  {
    id: 5,
    title: "HSE & SSLC – Zion Matric Hr. Sec. School",
    desc: "Completed higher secondary and school education with strong academic performance.",
    period: "2010 – 2022",
    icon: <FaSchool className="text-2xl text-orange-400" />,
  },
];

const Experience = () => {
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
          My <span className="text-orange-400">Experience & Education</span>
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Glowing Timeline Line */}
          <motion.div
            style={{ height: timelineHeight }}
            className="absolute top-0 left-1/2 w-[4px] -translate-x-1/2 z-0 rounded-full
              bg-[linear-gradient(to_bottom,_#f59e0b,_#fbbf24,_#fde68a)]
              shadow-[0_0_25px_6px_rgba(253,186,116,0.3)]
              animate-glow"
          />

          {/* Timeline Items */}
          <div className="flex flex-col gap-20 relative z-10">
            {workExperience.map((item, index) => {
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
                  {/* Connector Line */}
                  <div
                    className={`absolute top-6 w-[50%] h-[2px] bg-gradient-to-r ${
                      alignLeft
                        ? "right-1/2 from-orange-400 to-transparent"
                        : "left-1/2 from-transparent to-orange-400"
                    }`}
                  />

                  {/* Dot */}
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-300 border-4 border-white rounded-full z-10 shadow-lg" />

                  {/* Content */}
                  <div
                    className={`w-full lg:w-[45%] ${
                      alignLeft ? "lg:pr-10 text-left" : "lg:pl-10 text-left"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        {item.period && (
                          <p className="text-xs italic text-gray-400 mb-1">
                            {item.period}
                          </p>
                        )}
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

export default Experience;
