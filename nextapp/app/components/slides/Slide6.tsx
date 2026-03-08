"use client";

interface Props {
  onPrev: () => void;
}

export default function Slide6({ onPrev }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-zinc-900 text-white px-8 text-center">
      <div className="max-w-lg space-y-8">
        <div className="text-7xl">👋</div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          안녕히 가세요!
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed">
          소중한 시간 내어 봐주셔서 감사합니다.
          <br />
          <span className="text-white font-medium">정다민</span>이 더 좋은
          학교를 만들겠습니다.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-5">
          <p className="text-slate-300 text-sm">
            수요일 연설에서 더 자세히 만나요 🎤
          </p>
        </div>

        <button
          onClick={onPrev}
          aria-label="이전 슬라이드"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/50 outline-none"
        >
          ← 이전으로
        </button>
      </div>
    </div>
  );
}
