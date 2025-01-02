"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";


export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <React.Fragment key={word + idx}>
              {idx === 5 && <br />} {/* Add a line break when idx reaches 5 */}
              <motion.span
                className={` ${
                  idx > 4
                    ? "text-purple text-[40px] md:text-5xl lg:text-6xl"
                    : "dark:text-white text-white text-[30 px] md:text-[40px] lg:text-[50px]"
                } opacity-0`}
              >
                {word}{" "}
              </motion.span>
            </React.Fragment>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
