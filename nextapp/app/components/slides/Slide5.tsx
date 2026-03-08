"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Slide5({ onNext, onPrev }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5">

        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
          마무리하며
        </p>

        <h2 className="text-xl md:text-3xl font-bold text-black leading-tight">
          <TypeWriter text="너무 급하게 준비했지만..." speed={100} onDone={() => setStep(1)} />
        </h2>

        <div
          className="border-2 border-black rounded-xl p-4 text-left space-y-3"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 1 && (
            <>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                <TypeWriter
                  text="급하게 준비하다 보니 많이 부실한 것 같지만,"
                  speed={60}
                  onDone={() => setStep(2)}
                />
              </p>
              <p
                className="text-sm md:text-base font-semibold leading-relaxed text-black"
                style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.3s" }}
              >
                {step >= 2 && (
                  <TypeWriter
                    text="자세한 내용은 수요일에 직접 말씀드리도록 하겠습니다!"
                    speed={65}
                    onDone={() => setStep(3)}
                  />
                )}
              </p>
              <p
                className="text-xs text-gray-400"
                style={{ opacity: step >= 3 ? 1 : 0, transition: "opacity 0.5s" }}
              >
                끝까지 봐주셔서 진심으로 감사합니다.
              </p>
            </>
          )}
        </div>

        <p
          className="text-sm text-black font-medium"
          style={{ opacity: step >= 3 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          -- 2학년 3반 정다민 ;)
        </p>

        <div
          className="flex gap-3 justify-center"
          style={{ opacity: step >= 3 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <button
            onClick={onPrev}
            disabled={step < 3}
            aria-label="이전 슬라이드"
            className="px-5 py-2.5 border-2 border-black text-black text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 3}
            className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 outline-none"
          >
            마지막 --&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
