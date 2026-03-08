"use client";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Slide2({ onNext, onPrev }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-zinc-900 to-stone-900 text-white px-8 text-center">
      <div className="max-w-2xl space-y-8">
        <p className="text-sm uppercase tracking-widest text-zinc-400 font-semibold">
          공약에 대해서
        </p>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-300">
            선거 공약은…
          </h2>
          <p className="text-4xl md:text-6xl font-black text-white leading-tight">
            바로 <span className="text-yellow-400">여러분</span>입니다.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left space-y-3">
          <p className="text-zinc-300 text-lg leading-relaxed">
            공약을 안 지키는 일이 너무 많죠.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            그래서 저는 화려한 공약 대신,{" "}
            <span className="text-white font-semibold">
              여러분의 목소리를 듣는 것
            </span>
            을 제 첫 번째 약속으로 삼겠습니다.
          </p>
        </div>

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
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-yellow-300 outline-none"
          >
            다음 →
          </button>
        </div>
      </div>
    </div>
  );
}
