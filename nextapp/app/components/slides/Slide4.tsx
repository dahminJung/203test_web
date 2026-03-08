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
    <div className="w-full h-full flex flex-col items-center justify-center px-8 text-center" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-xl space-y-8">
        <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: "#91A6FF" }}>
          기본기
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#91A6FF" }}>
          물론! 회장으로써의 &#39;기본&#39;은<br />준비되어 있습니다 ;)
        </h2>

        <ul className="space-y-3 text-left" aria-label="회장 기본 역량 목록">
          {BASICS.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-4 rounded-xl px-5 py-4 border-2"
              style={{ borderColor: "#91A6FF" }}
            >
              <span aria-hidden="true" className="text-2xl">{item.icon}</span>
              <span className="text-base font-medium" style={{ color: "#333" }}>{item.text}</span>
            </li>
          ))}
        </ul>

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
            className="px-8 py-3 font-semibold rounded-full text-white transition-opacity duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none"
            style={{ backgroundColor: "#91A6FF" }}
          >
            다음 →
          </button>
        </div>
      </div>
    </div>
  );
}
