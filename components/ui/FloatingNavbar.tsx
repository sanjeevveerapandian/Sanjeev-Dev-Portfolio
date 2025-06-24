"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  className?: string;
}) => {
  const sectionIds = ["home", "about", "projects", "skills", "contact"];
  const activeId = useActiveSection(sectionIds);

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-6",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => {
          const Icon = navItem.icon;
          const targetId = navItem.link.replace("#", ""); // clean ID from #about → about
          const isActive = activeId === targetId;

          return (
            <Link
              key={`nav-${idx}`}
              href={navItem.link}
              className={cn(
                "flex items-center gap-2 transition-colors text-sm font-medium",
                isActive
                  ? "text-orange-400"
                  : "text-neutral-300 hover:text-white"
              )}
            >
              {Icon && (
                <Icon
                  className={cn(
                    "text-lg",
                    isActive ? "text-orange-400" : "text-white"
                  )}
                />
              )}
              <span className="hidden sm:inline">{navItem.name}</span>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
