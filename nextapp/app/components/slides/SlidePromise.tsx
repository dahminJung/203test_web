"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function SlidePromise({ onNext, onPrev }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5">

        <h2 className="text-xl md:text-3xl font-bold leading-tight text-black">
          <TypeWriter
            text="그렇다고 공약이 없는건 아닙니다!"
            speed={90}
            onDone={() => setStep(1)}
          />
        </h2>

        <div
          className="flex gap-3 justify-center"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <button
            onClick={onPrev}
            disabled={step < 1}
            aria-label="이전 슬라이드"
            className="px-5 py-2.5 border-2 border-black text-black text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 1}
            className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
