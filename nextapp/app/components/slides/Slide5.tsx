"use client";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Slide5({ onNext, onPrev }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 text-center" style={{ backgroundColor: "#91A6FF" }}>
      <div className="max-w-xl space-y-8">
        <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: "#ffffffaa" }}>
          마무리하며
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          너무 급하게 준비했지만…
        </h2>

        <div className="rounded-2xl p-7 text-left space-y-4 border-2 border-white">
          <p className="text-lg leading-relaxed" style={{ color: "#ffffffdd" }}>
            급하게 준비하다 보니 많이 부실한 것 같지만,
          </p>
          <p className="font-semibold text-xl leading-relaxed text-white">
            자세한 내용은{" "}
            <span className="underline decoration-dotted underline-offset-4">수요일</span>에
            직접 말씀드리도록 하겠습니다!
          </p>
          <p className="text-sm" style={{ color: "#ffffffaa" }}>
            끝까지 봐주셔서 진심으로 감사합니다 🙏
          </p>
        </div>

        <p className="text-white font-medium">2학년 3반 정다민 ;)</p>

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
            마지막 →
          </button>
        </div>
      </div>
    </div>
  );
}
