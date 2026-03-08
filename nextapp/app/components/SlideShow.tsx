"use client";

import { useState, useCallback } from "react";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import SlidePromise from "./slides/SlidePromise";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";

const TOTAL_SLIDES = 7;

export default function SlideShow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index < 0 || index >= TOTAL_SLIDES) return;
      setDirection(index > current ? "next" : "prev");
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 400);
    },
    [animating, current]
  );

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);
  const exit = useCallback(() => {
    window.close();
    window.location.href = "about:blank";
  }, []);

  const slides = [
    <Slide1 key={0} onNext={next} onExit={exit} />,
    <Slide2 key={1} onNext={next} onPrev={prev} />,
    <SlidePromise key={2} onNext={next} onPrev={prev} />,
    <Slide3 key={3} onNext={next} onPrev={prev} />,
    <Slide4 key={4} onNext={next} onPrev={prev} />,
    <Slide5 key={5} onNext={next} onPrev={prev} />,
    <Slide6 key={6} onPrev={prev} />,
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        key={current}
        style={{
          transition: `transform 400ms ease, opacity 400ms ease`,
          transform: animating
            ? direction === "next"
              ? "translateY(-8px)"
              : "translateY(8px)"
            : "translateY(0)",
          opacity: animating ? 0 : 1,
        }}
        className="w-full h-full"
      >
        {slides[current]}
      </div>

      {/* progress dots */}
      <div
        className="absolute bottom-6 left-1/2 flex gap-2 items-center"
        style={{ transform: "translateX(-50%)" }}
        aria-label="슬라이드 진행 표시"
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`${i + 1}번 슬라이드로 이동`}
            className="h-1.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-[width,background-color] duration-300"
            style={{
              width: i === current ? "16px" : "6px",
              backgroundColor: i === current ? "#000" : "rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
