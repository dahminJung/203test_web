"use client";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

const BASICS = [
  { icon: "📢", text: "학생들의 의견을 경청하기" },
  { icon: "🤝", text: "선생님과 학생 사이의 가교 역할" },
  { icon: "📋", text: "학교 행사 적극 참여 및 기획" },
  { icon: "💬", text: "솔직하고 투명한 소통" },
];

export default function Slide4({ onNext, onPrev }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white px-8 text-center">
      <div className="max-w-xl space-y-8">
        <p className="text-sm uppercase tracking-widest text-emerald-300 font-semibold">
          기본기
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          물론! 회장으로써의{" "}
          <span className="text-emerald-400">&#39;기본&#39;</span>은
          <br />
          준비되어 있습니다&nbsp;
          <span className="text-yellow-300">;)</span>
        </h2>

        <ul className="space-y-3 text-left" aria-label="회장 기본 역량 목록">
          {BASICS.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
            >
              <span aria-hidden="true" className="text-2xl">
                {item.icon}
              </span>
              <span className="text-base font-medium">{item.text}</span>
            </li>
          ))}
        </ul>

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
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-emerald-300 outline-none"
          >
            다음 →
          </button>
        </div>
      </div>
    </div>
  );
}
