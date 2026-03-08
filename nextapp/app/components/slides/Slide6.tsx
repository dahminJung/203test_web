"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onPrev: () => void;
  bg: string;
}

export default function Slide6({ onPrev, bg }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div style={{ backgroundColor: bg }} className="w-full h-full flex flex-col items-center justify-center px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5 animate-fade-slide-up">

        <pre className="text-xs leading-tight text-black/40 font-mono select-none">
{`  o/
 /|
 / \\`}
        </pre>

        <div className="w-8 h-px bg-black/20 mx-auto" />

        <h2 className="text-2xl md:text-4xl font-bold text-black tracking-tight">
          <TypeWriter text="안녕히 가세요!" speed={110} onDone={() => setStep(1)} />
        </h2>

        <p
          className="text-sm leading-relaxed text-black/70"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 1 && (
            <TypeWriter
              text="소중한 시간 내어 봐주셔서 감사합니다."
              speed={55}
              onDone={() => setStep(2)}
            />
          )}
        </p>

        <div
          className="bg-white border border-black/10 shadow-sm rounded-2xl px-5 py-4"
          style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <p className="font-mono text-xs text-black/60">
            &gt; 수요일 연설에서 더 자세히 만나요_
          </p>
        </div>

        <button
          onClick={onPrev}
          disabled={step < 2}
          aria-label="이전 슬라이드"
          className="border border-black/20 text-black rounded-full px-5 py-2.5 text-sm font-medium hover:border-black/60 transition-[border-color] duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          &lt;-- 이전으로
        </button>

      </div>
    </div>
  );
}
