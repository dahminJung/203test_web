"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onPrev: () => void;
  bg: string;
}

export default function Slide2({ onNext, onPrev, bg }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div style={{ backgroundColor: bg }} className="w-full h-full flex flex-col items-center justify-center px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5 animate-fade-slide-up">

        <p className="text-xs text-black/40 uppercase tracking-widest">
          공약에 대해서
        </p>

        <div className="w-8 h-px bg-black/20 mx-auto" />

        <h2 className="text-xl md:text-3xl font-bold text-black tracking-tight">
          <TypeWriter text="선거 공약은..." speed={110} onDone={() => setStep(1)} />
        </h2>

        <p
          className="text-2xl md:text-4xl font-black leading-tight text-black tracking-tight"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 1 && (
            <TypeWriter text="바로 여러분입니다." speed={120} onDone={() => setStep(2)} />
          )}
        </p>

        <p
          className="text-sm text-black/50 italic"
          style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 2 && (
            <TypeWriter text="무슨말 이냐고요..?" speed={80} onDone={() => setStep(3)} />
          )}
        </p>

        <div
          className="bg-white border border-black/10 shadow-sm rounded-2xl p-4 text-left"
          style={{ opacity: step >= 3 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          {step >= 3 && (
            <p className="text-sm leading-relaxed text-black/70">
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
            className="border border-black/20 text-black rounded-full px-5 py-2.5 text-sm font-medium hover:border-black/60 transition-[border-color] duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 4}
            className="bg-black text-white rounded-full px-6 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:opacity-90 transition-shadow transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
