"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Slide2({ onNext, onPrev }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="w-full max-w-lg space-y-6">

        <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
          공약에 대해서
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-black">
          <TypeWriter text="선거 공약은..." speed={110} onDone={() => setStep(1)} />
        </h2>

        <p
          className="text-3xl md:text-5xl font-black leading-tight text-black"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 1 && (
            <TypeWriter text="바로 여러분입니다." speed={120} onDone={() => setStep(2)} />
          )}
        </p>

        <p
          className="text-base md:text-lg text-gray-500 italic"
          style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 2 && (
            <TypeWriter text="무슨말 이냐고요..?" speed={80} onDone={() => setStep(3)} />
          )}
        </p>

        <div
          className="border-2 border-black rounded-2xl p-5 text-left"
          style={{ opacity: step >= 3 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          {step >= 3 && (
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              <TypeWriter
                text="공약을 안 지키는 일이 너무 많죠. 그래서 저는 화려한 공약 대신, 여러분의 목소리를 듣는 것을 첫 번째 약속으로 삼겠습니다."
                speed={55}
                onDone={() => setStep(4)}
              />
            </p>
          )}
        </div>

        <div
          className="flex gap-3 justify-center"
          style={{ opacity: step >= 4 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <button
            onClick={onPrev}
            disabled={step < 4}
            aria-label="이전 슬라이드"
            className="px-6 py-3 border-2 border-black text-black font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 4}
            className="px-8 py-3 bg-black text-white font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
