"use client";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Slide5({ onNext, onPrev }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-900 via-pink-900 to-fuchsia-900 text-white px-8 text-center">
      <div className="max-w-xl space-y-8">
        <p className="text-sm uppercase tracking-widest text-rose-300 font-semibold">
          마무리하며
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          너무 급하게 준비했지만…
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-left space-y-4">
          <p className="text-lg text-slate-200 leading-relaxed">
            급하게 준비하다 보니 많이 부실한 것 같지만,
          </p>
          <p className="text-white font-semibold text-xl leading-relaxed">
            자세한 내용은{" "}
            <span className="text-yellow-300 underline decoration-dotted underline-offset-4">
              수요일
            </span>
            에 직접 말씀드리도록 하겠습니다!
          </p>
          <p className="text-slate-400 text-sm">
            끝까지 봐주셔서 진심으로 감사합니다 🙏
          </p>
        </div>

        <p className="text-rose-300 text-lg font-medium">
          2학년 3반 정다민&nbsp;
          <span className="text-yellow-300">;)</span>
        </p>

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
            className="px-8 py-3 bg-rose-500 hover:bg-rose-400 text-white font-semibold rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-rose-300 outline-none"
          >
            마지막 →
          </button>
        </div>
      </div>
    </div>
  );
}
