"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onPrev: () => void;
}

export default function Slide6({ onPrev }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-8 text-center">
      <div className="max-w-lg space-y-8">
        <pre className="text-xs leading-tight text-black font-mono select-none">
{`  o/
 /|
 / \\`}
        </pre>

        <h2 className="text-4xl md:text-5xl font-bold text-black min-h-[64px]">
          <TypeWriter text="안녕히 가세요!" speed={70} onDone={() => setStep(1)} />
        </h2>

        <p
          className="text-lg leading-relaxed text-gray-600 transition-opacity duration-500"
          style={{ opacity: step >= 1 ? 1 : 0 }}
        >
          {step >= 1 && (
            <TypeWriter
              text="소중한 시간 내어 봐주셔서 감사합니다. 정다민이 더 좋은 학교를 만들겠습니다."
              speed={30}
              onDone={() => setStep(2)}
            />
          )}
        </p>

        <div
          className="border-2 border-black rounded-2xl px-8 py-5 transition-opacity duration-500"
          style={{ opacity: step >= 2 ? 1 : 0 }}
        >
          <p className="font-mono text-sm text-black">
            &gt; 수요일 연설에서 더 자세히 만나요_
          </p>
        </div>

        <button
          onClick={onPrev}
          disabled={step < 2}
          aria-label="이전 슬라이드"
          className="px-6 py-3 border-2 border-black text-black font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 500ms ease" }}
        >
          &lt;-- 이전으로
        </button>
      </div>
    </div>
  );
}
