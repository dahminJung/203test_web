"use client";

import { useState } from "react";
import TypeWriter from "../TypeWriter";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

const CANDIDATES = ["정다민 (2-3)", "후보 B", "후보 C"];

export default function Slide3({ onNext, onPrev }: Props) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [voted, setVoted] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-5 text-center overflow-y-auto py-8">
      <div className="w-full max-w-sm space-y-5">

        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
          투표 예시
        </p>

        <h2 className="text-xl md:text-3xl font-bold text-black">
          <TypeWriter text="이렇게 투표하게 돼요!" speed={100} onDone={() => setStep(1)} />
        </h2>

        {!voted ? (
          <>
            <div
              className="space-y-3 text-left"
              style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.5s" }}
            >
              {CANDIDATES.map((name, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors duration-200"
                  style={{ borderColor: selected === i ? "#000" : "#ccc" }}
                >
                  <input
                    type="radio"
                    name="candidate"
                    value={i}
                    checked={selected === i}
                    onChange={() => setSelected(i)}
                    className="w-4 h-4 accent-black"
                    disabled={step < 1}
                  />
                  <span className="text-sm md:text-base font-medium text-black">
                    {i === 0
                      ? <>{name} <span className="text-xs font-normal text-gray-400">&lt;-- 저예요</span></>
                      : name}
                  </span>
                </label>
              ))}
            </div>

            <button
              onClick={() => selected !== null && setVoted(true)}
              disabled={selected === null || step < 1}
              className="w-full py-2.5 text-sm font-semibold rounded-xl border-2 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-black outline-none"
              style={{
                backgroundColor: selected !== null ? "#000" : "#fff",
                color: selected !== null ? "#fff" : "#ccc",
                borderColor: selected !== null ? "#000" : "#ccc",
                cursor: selected === null ? "not-allowed" : "pointer",
              }}
            >
              {selected === null ? "후보를 선택해 주세요" : "투표하기 [ENTER]"}
            </button>
          </>
        ) : (
          <div className="space-y-4">
            <p className="text-xl font-bold text-black">
              <TypeWriter
                text={selected === 0 ? "감사합니다!!" : "소중한 한 표 감사합니다!"}
                speed={90}
              />
            </p>
            <p className="text-sm text-gray-500">실제 투표일에도 꼭 참여해 주세요.</p>
            <button
              onClick={() => { setSelected(null); setVoted(false); setStep(1); }}
              className="px-5 py-2 rounded-full text-xs border-2 border-black text-black transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 outline-none"
            >
              [reset] 다시 해보기
            </button>
          </div>
        )}

        <div
          className="flex gap-3 justify-center"
          style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <button
            onClick={onPrev}
            disabled={step < 1}
            aria-label="이전 슬라이드"
            className="px-5 py-2.5 border-2 border-black text-black text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 1}
            className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
