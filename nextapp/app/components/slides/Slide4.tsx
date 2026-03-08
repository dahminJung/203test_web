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
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-8 text-center">
      <div className="max-w-xl space-y-8">
        <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
          기본기
        </p>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black min-h-[96px]">
          <TypeWriter
            text={"물론! 회장으로써의 '기본'은\n준비되어 있습니다 ;)"}
            speed={45}
            onDone={() => setStep(1)}
          />
        </h2>

        <ul
          className="space-y-3 text-left transition-opacity duration-500"
          aria-label="회장 기본 역량 목록"
          style={{ opacity: step >= 1 ? 1 : 0 }}
        >
          {BASICS.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-4 border-2 border-black rounded-xl px-5 py-4"
              style={{
                transitionDelay: `${i * 100}ms`,
                transition: "opacity 400ms ease",
                opacity: step >= 1 ? 1 : 0,
              }}
            >
              <span className="font-mono font-bold text-black">{item.mark}</span>
              <span className="text-base font-medium text-black">{item.text}</span>
            </li>
          ))}
        </ul>

        <div
          className="flex gap-3 justify-center pt-2 transition-opacity duration-500"
          style={{ opacity: step >= 1 ? 1 : 0, transitionDelay: "400ms" }}
        >
          <button
            onClick={onPrev}
            disabled={step < 1}
            aria-label="이전 슬라이드"
            className="px-6 py-3 border-2 border-black text-black font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 1}
            className="px-8 py-3 bg-black text-white font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>
      </div>
    </div>
  );
}
