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
    <div className="w-full h-full flex flex-col items-center justify-center px-8 text-center" style={{ backgroundColor: "#91A6FF" }}>
      <div className="max-w-lg w-full space-y-6">
        <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: "#ffffffaa" }}>
          투표 예시
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          이렇게 투표하게 돼요!
        </h2>

        {!voted ? (
          <>
            <div className="space-y-3 text-left">
              {CANDIDATES.map((name, i) => (
                <label
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors duration-200"
                  style={{
                    borderColor: selected === i ? "#ffffff" : "#ffffff55",
                    backgroundColor: selected === i ? "#ffffff22" : "transparent",
                  }}
                >
                  <input
                    type="radio"
                    name="candidate"
                    value={i}
                    checked={selected === i}
                    onChange={() => setSelected(i)}
                    className="w-5 h-5"
                  />
                  <span className="font-medium text-lg text-white">
                    {i === 0 ? <>{name} <span className="text-sm font-normal opacity-70">← 저예요 😊</span></> : name}
                  </span>
                </label>
              ))}
            </div>

            <button
              onClick={handleVote}
              disabled={selected === null}
              className="w-full py-3 font-semibold rounded-xl transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none"
              style={{
                backgroundColor: selected === null ? "#ffffff44" : "#ffffff",
                color: selected === null ? "#ffffffaa" : "#91A6FF",
                cursor: selected === null ? "not-allowed" : "pointer",
              }}
            >
              {selected === null ? "후보를 선택해 주세요" : "투표하기"}
            </button>
          </>
        ) : (
          <div className="space-y-4">
            <div className="text-6xl">🎉</div>
            <p className="text-2xl font-bold text-white">
              {selected === 0 ? "감사합니다!!" : "소중한 한 표 감사합니다!"}
            </p>
            <p style={{ color: "#ffffffcc" }}>실제 투표일에도 꼭 참여해 주세요.</p>
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-full text-sm border-2 border-white text-white transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 outline-none"
            >
              다시 해보기
            </button>
          </div>
        )}

        <div className="flex gap-3 justify-center pt-2">
          <button
            onClick={onPrev}
            aria-label="이전 슬라이드"
            className="px-6 py-3 font-semibold rounded-full border-2 border-white text-white transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 outline-none"
          >
            ← 이전
          </button>
          <button
            onClick={onNext}
            className="px-8 py-3 font-semibold rounded-full transition-opacity duration-200 hover:opacity-80 focus-visible:ring-2 outline-none"
            style={{ backgroundColor: "#ffffff", color: "#91A6FF" }}
          >
            다음 →
          </button>
        </div>
      </div>
    </div>
  );
}
