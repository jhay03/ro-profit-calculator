"use client";

import { useEffect, useState } from "react";

export default function TypingText() {
  const text = "Welcome to Profit Calculator . . . ";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <h1 className="text-3xl font-bold">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
