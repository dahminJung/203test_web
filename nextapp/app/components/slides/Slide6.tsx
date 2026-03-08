"use client";

interface Props {
  onPrev: () => void;
}

export default function Slide6({ onPrev }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 text-center" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-lg space-y-8">
        <div className="text-7xl">👋</div>

        <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#91A6FF" }}>
          안녕히 가세요!
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#555" }}>
          소중한 시간 내어 봐주셔서 감사합니다.
          <br />
          <span className="font-medium" style={{ color: "#91A6FF" }}>정다민</span>이 더 좋은 학교를 만들겠습니다.
        </p>

        <div className="rounded-2xl px-8 py-5 border-2" style={{ borderColor: "#91A6FF" }}>
          <p className="text-sm" style={{ color: "#91A6FF" }}>
            수요일 연설에서 더 자세히 만나요 🎤
          </p>
        </div>

        <button
          onClick={onPrev}
          aria-label="이전 슬라이드"
          className="px-6 py-3 font-semibold rounded-full border-2 transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none"
          style={{ borderColor: "#91A6FF", color: "#91A6FF" }}
        >
          ← 이전으로
        </button>
      </div>
    </div>
  );
}
