"use client";

interface Props {
  onNext: () => void;
  onExit: () => void;
}

export default function Slide1({ onNext, onExit }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white px-8 text-center">
      <div className="max-w-xl space-y-6">
        <p className="text-sm uppercase tracking-widest text-purple-300 font-semibold">
          2학년 3반 · 정다민
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          이 사이트를
          <br />
          <span className="text-purple-400">왜 만들었냐면요…</span>
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          공약을 말하기 전에, 먼저{" "}
          <span className="text-white font-semibold">솔직하게</span> 이야기하고
          싶었어요.
          <br />
          화면을 넘기면서 확인해 주세요!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <button
            onClick={onNext}
            className="px-8 py-3 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent outline-none"
          >
            다음 페이지 →
          </button>
          <button
            onClick={onExit}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent outline-none"
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  );
}
