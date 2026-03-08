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
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5">

        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
          공약에 대해서
        </p>

        <h2 className="text-xl md:text-3xl font-bold text-black">
          <TypeWriter text="선거 공약은..." speed={110} onDone={() => setStep(1)} />
        </h2>

        <p
          className="text-2xl md:text-4xl font-black leading-tight text-black"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 1 && (
            <TypeWriter text="바로 여러분입니다." speed={120} onDone={() => setStep(2)} />
          )}
        </p>

        <p
          className="text-sm md:text-base text-gray-500 italic"
          style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 2 && (
            <TypeWriter text="무슨말 이냐고요..?" speed={80} onDone={() => setStep(3)} />
          )}
        </p>

        <div
          className="border-2 border-black rounded-xl p-4 text-left"
          style={{ opacity: step >= 3 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          {step >= 3 && (
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              <TypeWriter
                text="저는 초등학교 5학년부터 회장들이 공약을 안지키는 일을 너무나 보았습니다. 그래서 저는 화려한 공약대신, 여러분의 목소리를 듣는것을 첫번째 약속으로 삼겠습니다."
                speed={45}
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
            className="px-5 py-2.5 border-2 border-black text-black text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 4}
            className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
