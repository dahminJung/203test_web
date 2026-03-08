"use client";

import { useState, useEffect } from "react";

interface Props {
  text: string;
  speed?: number;
  className?: string;
  onDone?: () => void;
}

export default function TypeWriter({ text, speed = 40, className = "", onDone }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}
