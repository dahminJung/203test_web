"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onExit: () => void;
  bg: string;
}

export default function Slide1({ onNext, onExit, bg }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div style={{ backgroundColor: bg }} className="w-full h-full flex flex-col items-center justify-center px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5 animate-fade-slide-up">

        <p className="text-xs text-black/40 uppercase tracking-widest">
          전교 회장 후보
        </p>

        <div className="w-8 h-px bg-black/20 mx-auto" />

        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-black tracking-tight">
          <TypeWriter
            text="안녕하세요, 정다민입니다"
            speed={100}
            onDone={() => setStep(1)}
          />
        </h1>

        <p
          className="text-sm leading-relaxed text-black/70"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 1 && (
            <TypeWriter
              text="저의 디자인 실력이 처참하기 때문에 이렇게 사이트로 만나뵙게 되었습니다 :)"
              speed={60}
              onDone={() => setStep(2)}
            />
          )}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <button
            onClick={onNext}
            disabled={step < 2}
            className="bg-black text-white rounded-full px-6 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:opacity-90 transition-shadow transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 페이지 --&gt;
          </button>
          <button
            onClick={onExit}
            disabled={step < 2}
            className="border border-black/20 text-black rounded-full px-5 py-2.5 text-sm font-medium hover:border-black/60 transition-[border-color] duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            나가기 [x]
          </button>
        </div>

      </div>
    </div>
  );
}
