"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

const BASICS = [
  { mark: "[1]", text: "학생들의 의견을 경청하기" },
  { mark: "[2]", text: "선생님과 학생 사이의 가교 역할" },
  { mark: "[3]", text: "학교 행사 적극 참여 및 기획" },
  { mark: "[4]", text: "솔직하고 투명한 소통" },
];

export default function Slide4({ onNext, onPrev }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5">

        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
          기본기
        </p>

        <h2 className="text-xl md:text-3xl font-bold leading-tight text-black">
          <TypeWriter
            text={"물론! 회장으로써의 '기본'은\n준비되어 있습니다 ;)"}
            speed={90}
            onDone={() => setStep(1)}
          />
        </h2>

        <p
          className="text-sm text-gray-500"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 1 && (
            <TypeWriter
              text="이래봐도 작년 상점 전교 2등 히힣)"
              speed={70}
              onDone={() => setStep(2)}
            />
          )}
        </p>

        <ul className="space-y-2 text-left" aria-label="회장 기본 역량 목록">
          {BASICS.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 border-2 border-black rounded-xl px-4 py-3"
              style={{
                opacity: step >= 2 ? 1 : 0,
                transition: `opacity 0.4s ease ${i * 150}ms`,
              }}
            >
              <span className="font-mono font-bold text-black text-sm">{item.mark}</span>
              <span className="text-sm font-medium text-black">{item.text}</span>
            </li>
          ))}
        </ul>

        <div
          className="flex gap-3 justify-center"
          style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.5s ease 600ms" }}
        >
          <button
            onClick={onPrev}
            disabled={step < 2}
            aria-label="이전 슬라이드"
            className="px-5 py-2.5 border-2 border-black text-black text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 2}
            className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
