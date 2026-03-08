"use client";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Slide2({ onNext, onPrev }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 text-center" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-2xl space-y-8">
        <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: "#91A6FF" }}>
          공약에 대해서
        </p>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#91A6FF" }}>
            선거 공약은…
          </h2>
          <p className="text-4xl md:text-6xl font-black leading-tight" style={{ color: "#91A6FF" }}>
            바로 <span style={{ color: "#91A6FF" }} className="underline decoration-4 underline-offset-4">여러분</span>입니다.
          </p>
        </div>

        <div className="rounded-2xl p-6 text-left space-y-3 border-2" style={{ borderColor: "#91A6FF" }}>
          <p className="text-lg leading-relaxed" style={{ color: "#333" }}>
            공약을 안 지키는 일이 너무 많죠.
          </p>
          <p className="leading-relaxed" style={{ color: "#555" }}>
            그래서 저는 화려한 공약 대신,{" "}
            <span className="font-semibold" style={{ color: "#91A6FF" }}>여러분의 목소리를 듣는 것</span>을
            첫 번째 약속으로 삼겠습니다.
          </p>
        </div>

        <div className="flex gap-3 justify-center pt-2">
          <button
            onClick={onPrev}
            aria-label="이전 슬라이드"
            className="px-6 py-3 font-semibold rounded-full border-2 transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none"
            style={{ borderColor: "#91A6FF", color: "#91A6FF" }}
          >
            ← 이전
          </button>
          <button
            onClick={onNext}
            className="px-8 py-3 font-semibold rounded-full transition-opacity duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none text-white"
            style={{ backgroundColor: "#91A6FF" }}
          >
            다음 →
          </button>
        </div>
      </div>
    </div>
  );
}
