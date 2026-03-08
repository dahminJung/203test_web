"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onPrev: () => void;
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

export default function Slide3({ onNext, onPrev }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5">

        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
          <TypeWriter
            text="어떻게 진행될지 모르시겠다면.."
            speed={60}
            onDone={() => setStep(1)}
          />
        </p>

        <h2
          className="text-xl md:text-3xl font-bold text-black"
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
                className="border-2 border-black rounded-xl px-4 py-3 space-y-1"
                style={{
                  opacity: step >= i + 2 ? 1 : 0,
                  transition: `opacity 0.5s ease`,
                }}
              >
                <p className="text-sm font-bold text-black">{s.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className="text-center text-gray-400 text-lg leading-none py-1"
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
            className="px-5 py-2.5 border-2 border-black text-black text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 5}
            className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
