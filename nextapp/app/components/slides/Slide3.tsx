"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onPrev: () => void;
  bg: string;
}

const STEPS = [
  {
    label: "Step 1. 의견 수집",
    desc: "사이트에서 무물보처럼 의견 수집을 할 거예요",
  },
  {
    label: "Step 2. 의견 투표",
    desc: "정해진 기간 안에 의견들 중 2개를 투표하게 될 거예요",
  },
  {
    label: "Step 3. 의견 실행",
    desc: "뽑힌 의견을 공개하고 실행할 것입니다.",
  },
];

export default function Slide3({ onNext, onPrev, bg }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div style={{ backgroundColor: bg }} className="w-full h-full flex flex-col items-center justify-center px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5 animate-fade-slide-up">

        <p className="text-xs text-black/40 uppercase tracking-widest">
          <TypeWriter
            text="어떻게 진행될지 모르시겠다면.."
            speed={60}
            onDone={() => setStep(1)}
          />
        </p>

        <div className="w-8 h-px bg-black/20 mx-auto" />

        <h2
          className="text-xl md:text-3xl font-bold text-black tracking-tight"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 1 && (
            <TypeWriter
              text="이렇게 투표하게 돼요!"
              speed={90}
              onDone={() => setStep(2)}
            />
          )}
        </h2>

        <div className="space-y-3 text-left">
          {STEPS.map((s, i) => (
            <div key={i}>
              <div
                className="border-l-2 border-l-black border border-black/10 shadow-sm bg-white rounded-xl px-4 py-3 space-y-1"
                style={{
                  opacity: step >= i + 2 ? 1 : 0,
                  transition: `opacity 0.5s ease`,
                }}
              >
                <p className="text-sm font-medium text-black">{s.label}</p>
                <p className="text-xs leading-relaxed text-black/70">{s.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className="text-center text-black/30 text-lg leading-none py-1"
                  style={{
                    opacity: step >= i + 3 ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  |
                </div>
              )}
            </div>
          ))}
        </div>

        {/* step별 순차 등장 트리거 */}
        {step === 2 && (
          <span
            className="sr-only"
            ref={(el) => {
              if (el) setTimeout(() => setStep(3), 400);
            }}
          />
        )}
        {step === 3 && (
          <span
            className="sr-only"
            ref={(el) => {
              if (el) setTimeout(() => setStep(4), 600);
            }}
          />
        )}
        {step === 4 && (
          <span
            className="sr-only"
            ref={(el) => {
              if (el) setTimeout(() => setStep(5), 600);
            }}
          />
        )}

        <div
          className="flex gap-3 justify-center"
          style={{ opacity: step >= 5 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <button
            onClick={onPrev}
            disabled={step < 5}
            aria-label="이전 슬라이드"
            className="border border-black/20 text-black rounded-full px-5 py-2.5 text-sm font-medium hover:border-black/60 transition-[border-color] duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 5}
            className="bg-black text-white rounded-full px-6 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:opacity-90 transition-shadow transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
