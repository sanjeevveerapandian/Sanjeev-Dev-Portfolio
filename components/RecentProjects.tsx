"use client";

import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

export default function RecentProjects() {
  return (
    <>
      {/* Decorative Top Glow */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent w-full" />
        </div>
      </div>

      <section
        id="projects"
        className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold text-white">
          <span className="text-white">Recent </span>
          <span className="text-orange-400">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-slate-700/40 bg-gradient-to-br from-slate-800/90 to-slate-700/50 p-6 backdrop-blur-lg shadow-xl hover:shadow-orange-500/20 transition-all duration-500"
            >
              {/* Cover Image */}
              <div className="relative w-full h-52 rounded-xl overflow-hidden mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm mt-2 mb-4 line-clamp-3">
                {item.des}
              </p>

              {/* Icons & Code Link */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center -space-x-2">
                  {item.iconLists.map((icon, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 bg-black border border-white/20 rounded-full flex justify-center items-center"
                    >
                      <img src={icon} alt="tech-icon" className="p-1" />
                    </div>
                  ))}
                </div>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span className="text-sm font-medium">Code Base</span>
                  <FaLocationArrow className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
