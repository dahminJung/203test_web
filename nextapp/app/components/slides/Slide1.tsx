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
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-8 text-center">
      <div className="max-w-xl space-y-8">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black min-h-[60px]">
          <TypeWriter
            text="안녕하세요, 정다민입니다"
            speed={100}
            onDone={() => setStep(1)}
          />
        </h1>

        <p
          className="text-lg leading-relaxed text-gray-600 min-h-[56px]"
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
          className="flex flex-col sm:flex-row gap-3 justify-center pt-4"
          style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <button
            onClick={onNext}
            disabled={step < 2}
            className="px-8 py-3 bg-black text-white font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 페이지 --&gt;
          </button>
          <button
            onClick={onExit}
            disabled={step < 2}
            className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            나가기 [x]
          </button>
        </div>

      </div>
    </div>
  );
}
