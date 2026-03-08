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
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-8 text-center">
      <div className="max-w-2xl space-y-8">
        <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
          공약에 대해서
        </p>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black min-h-[48px]">
            <TypeWriter text="선거 공약은..." speed={60} onDone={() => setStep(1)} />
          </h2>

          <p
            className="text-4xl md:text-6xl font-black leading-tight text-black min-h-[72px] transition-opacity duration-500"
            style={{ opacity: step >= 1 ? 1 : 0 }}
          >
            {step >= 1 && (
              <TypeWriter
                text="바로 여러분입니다."
                speed={80}
                onDone={() => setStep(2)}
              />
            )}
          </p>
        </div>

        <pre
          className="text-xs leading-tight text-black font-mono select-none transition-opacity duration-500"
          style={{ opacity: step >= 2 ? 1 : 0 }}
        >
{`  ___________________________
 |                           |
 |  [ ] 공약을 지키겠습니다   |
 |  [ ] 여러분의 말을 듣겠습니다|
 |  [x] 여러분이 곧 공약입니다 |
 |___________________________|`}
        </pre>

        <div
          className="border-2 border-black rounded-2xl p-6 text-left space-y-3 transition-opacity duration-500"
          style={{ opacity: step >= 2 ? 1 : 0 }}
        >
          {step >= 2 && (
            <p className="text-lg leading-relaxed text-gray-700">
              <TypeWriter
                text="공약을 안 지키는 일이 너무 많죠. 그래서 저는 화려한 공약 대신, 여러분의 목소리를 듣는 것을 첫 번째 약속으로 삼겠습니다."
                speed={25}
                onDone={() => setStep(3)}
              />
            </p>
          )}
        </div>

        <div
          className="flex gap-3 justify-center pt-2 transition-opacity duration-500"
          style={{ opacity: step >= 3 ? 1 : 0 }}
        >
          <button
            onClick={onPrev}
            disabled={step < 3}
            aria-label="이전 슬라이드"
            className="px-6 py-3 border-2 border-black text-black font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 3}
            className="px-8 py-3 bg-black text-white font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>
      </div>
    </div>
  );
}
