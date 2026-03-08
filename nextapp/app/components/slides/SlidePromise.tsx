"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function SlidePromise({ onNext, onPrev }: Props) {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#fafafa] px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5 animate-fade-slide-up">

        <h2 className="text-xl md:text-3xl font-bold leading-tight text-black tracking-tight">
          <TypeWriter
            text="그렇다고 공약이 없는건 아닙니다!"
            speed={90}
            onDone={() => setStep(1)}
          />
        </h2>

        <div className="w-8 h-px bg-black/20 mx-auto" />

        <p
          className="text-base md:text-lg font-medium text-black/70 italic"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          {step >= 1 && (
            <TypeWriter
              text={'단지, "현재진행형"뿐입니다.'}
              speed={80}
              onDone={() => setStep(2)}
            />
          )}
        </p>

        <div
          className="bg-white border border-black/10 shadow-sm rounded-2xl p-4 text-left"
          style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          {step >= 2 && (
            <p className="text-sm leading-relaxed text-black/70">
              <TypeWriter
                text="하핫 자꾸 이해하지 못하게 말하게 되네요. 무슨 뜻인지 설명해 드릴게요! 저는 여러분이 원하는 공약을 제가 단정 지을 수 없다고 생각합니다. 여러분이 원하는 공약은 상황마다, 시간마다 바뀔 수 있으니까요. 그래서 저는 여러분이 원하는 공약을 실천할 수 있도록 투표 시스템을 통해 공약을 실천하겠습니다!"
                speed={35}
                onDone={() => setStep(3)}
              />
            </p>
          )}
        </div>

        <div
          className="flex gap-3 justify-center"
          style={{ opacity: step >= 3 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <button
            onClick={onPrev}
            disabled={step < 3}
            aria-label="이전 슬라이드"
            className="border border-black/20 text-black rounded-full px-5 py-2.5 text-sm font-medium hover:border-black/60 transition-[border-color] duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 3}
            className="bg-black text-white rounded-full px-6 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:opacity-90 transition-shadow transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
