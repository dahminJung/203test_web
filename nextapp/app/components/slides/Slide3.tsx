"use client";

import { useState } from "react";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

const CANDIDATES = ["정다민 (2-3)", "후보 B", "후보 C"];

export default function Slide3({ onNext, onPrev }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (selected === null) return;
    setVoted(true);
  };

  const handleReset = () => {
    setSelected(null);
    setVoted(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 text-white px-8 text-center">
      <div className="max-w-lg w-full space-y-6">
        <p className="text-sm uppercase tracking-widest text-sky-300 font-semibold">
          투표 예시
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          이렇게 투표하게 돼요!
        </h2>

        {!voted ? (
          <>
            <div className="space-y-3 text-left">
              {CANDIDATES.map((name, i) => (
                <label
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    selected === i
                      ? "border-sky-400 bg-sky-500/20"
                      : "border-white/10 bg-white/5 hover:border-white/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="candidate"
                    value={i}
                    checked={selected === i}
                    onChange={() => setSelected(i)}
                    className="w-5 h-5 accent-sky-400"
                  />
                  <span className="font-medium text-lg">
                    {i === 0 ? (
                      <>
                        {name}{" "}
                        <span className="text-sky-300 text-sm font-normal">
                          ← 저예요 😊
                        </span>
                      </>
                    ) : (
                      name
                    )}
                  </span>
                </label>
              ))}
            </div>

            <button
              onClick={handleVote}
              disabled={selected === null}
              className="w-full py-3 bg-sky-500 hover:bg-sky-400 disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-sky-300 outline-none"
            >
              {selected === null ? "후보를 선택해 주세요" : "투표하기"}
            </button>
          </>
        ) : (
          <div className="space-y-4">
            <div className="text-6xl">🎉</div>
            <p className="text-2xl font-bold">
              {selected === 0 ? "감사합니다!! 💙" : "소중한 한 표 감사합니다!"}
            </p>
            <p className="text-slate-300">
              실제 투표일에도 꼭 참여해 주세요.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/50 outline-none"
            >
              다시 해보기
            </button>
          </div>
        )}

        <div className="flex gap-3 justify-center pt-2">
          <button
            onClick={onPrev}
            aria-label="이전 슬라이드"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/50 outline-none"
          >
            ← 이전
          </button>
          <button
            onClick={onNext}
            className="px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-sky-300 outline-none"
          >
            다음 →
          </button>
        </div>
      </div>
    </div>
  );
}
