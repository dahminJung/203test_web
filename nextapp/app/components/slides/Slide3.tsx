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
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-8 text-center">
      <div className="max-w-lg w-full space-y-6">
        <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
          투표 예시
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-black min-h-[48px]">
          <TypeWriter text="이렇게 투표하게 돼요!" speed={50} onDone={() => setStep(1)} />
        </h2>

        {!voted ? (
          <>
            <div
              className="space-y-3 text-left transition-opacity duration-500"
              style={{ opacity: step >= 1 ? 1 : 0 }}
            >
              {CANDIDATES.map((name, i) => (
                <label
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors duration-200"
                  style={{ borderColor: selected === i ? "#000" : "#ccc" }}
                >
                  <input
                    type="radio"
                    name="candidate"
                    value={i}
                    checked={selected === i}
                    onChange={() => setSelected(i)}
                    className="w-5 h-5 accent-black"
                    disabled={step < 1}
                  />
                  <span className="font-medium text-lg text-black">
                    {i === 0
                      ? <>{name} <span className="text-sm font-normal text-gray-400">&lt;-- 저예요</span></>
                      : name}
                  </span>
                </label>
              ))}
            </div>

            <button
              onClick={() => selected !== null && setVoted(true)}
              disabled={selected === null || step < 1}
              className="w-full py-3 font-semibold rounded-xl border-2 transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
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
            <pre className="text-sm leading-tight text-black font-mono select-none">
{`  _____  _  _
 |_   _|| || |  /\\  /\\
   | |  | __ | / //\\ \\
   |_|  |_||_|/_/    \\_\\`}
            </pre>
            <p className="text-2xl font-bold text-black">
              <TypeWriter
                text={selected === 0 ? "감사합니다!!" : "소중한 한 표 감사합니다!"}
                speed={60}
              />
            </p>
            <p className="text-gray-500">실제 투표일에도 꼭 참여해 주세요.</p>
            <button
              onClick={() => { setSelected(null); setVoted(false); setStep(1); }}
              className="px-6 py-2 rounded-full text-sm border-2 border-black text-black transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 outline-none"
            >
              [reset] 다시 해보기
            </button>
          </div>
        )}

        <div
          className="flex gap-3 justify-center pt-2 transition-opacity duration-500"
          style={{ opacity: step >= 1 ? 1 : 0 }}
        >
          <button
            onClick={onPrev}
            disabled={step < 1}
            aria-label="이전 슬라이드"
            className="px-6 py-3 border-2 border-black text-black font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 outline-none"
          >
            &lt;-- 이전
          </button>
          <button
            onClick={onNext}
            disabled={step < 1}
            className="px-8 py-3 bg-black text-white font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 outline-none"
          >
            다음 --&gt;
          </button>
        </div>
      </div>
    </div>
  );
}
