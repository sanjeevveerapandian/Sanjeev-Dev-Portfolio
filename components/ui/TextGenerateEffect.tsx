"use client";

import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  words?: string;
  children?: React.ReactNode;
  className?: string;
};

export const TextGenerateEffect = ({ words, children, className }: Props) => {
  const [scope, animate] = useAnimate();
  const wordsArray = typeof words === "string" ? words.split(" ") : [];

  useEffect(() => {
    if (!wordsArray.length) return;
    animate(
      scope.current,
      { opacity: [0, 1], y: [10, 0] },
      { duration: 0.5, delay: stagger(0.05) }
    );
  }, [words]);

  return (
    <div className={cn("font-bold", className)} ref={scope}>
      {wordsArray.length
        ? wordsArray.map((word, i) => (
            <span key={i} className="inline-block mr-2">
              {word}
            </span>
          ))
        : children}
    </div>
  );
};
