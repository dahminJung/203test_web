"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onExit: () => void;
}

export default function Slide1({ onNext, onExit }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5">

        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-black">
          <TypeWriter
            text="안녕하세요, 정다민입니다"
            speed={100}
            onDone={() => setStep(1)}
          />
        </h1>

        <p
          className="text-sm md:text-base leading-relaxed text-gray-600"
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
            className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 페이지 --&gt;
          </button>
          <button
            onClick={onExit}
            disabled={step < 2}
            className="px-6 py-2.5 border-2 border-black text-black text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            나가기 [x]
          </button>
        </div>

      </div>
    </div>
  );
}
