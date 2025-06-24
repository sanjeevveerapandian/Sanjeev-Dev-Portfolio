"use client";

import { useMounted } from "@/hooks/useMounted";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  words?: string;
  className?: string;
  textClassName?: string;
};

export const TextGenerateEffect = ({
  words = "Full Stack Developer",
  className,
  textClassName,
}: Props) => {
  const mounted = useMounted();
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setDisplayedText(words.slice(0, indexRef.current));
      indexRef.current++;

      if (indexRef.current > words.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [mounted, words]);

  if (!mounted) return null;

  return (
    <div className={className}>
      <h1 className={textClassName}>{displayedText}</h1>
    </div>
  );
};
