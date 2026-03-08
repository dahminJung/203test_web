"use client";

interface Props {
  onNext: () => void;
  onExit: () => void;
}

export default function Slide1({ onNext, onExit }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-8 text-center">
      <div className="max-w-xl space-y-8">
        <pre className="text-xs leading-tight text-black font-mono select-none">
{`  ____  _____  _____
 |___ \\|___ / |___ /
   __) | |_ \\   |_ \\
  / __/ ___) | ___) |
 |_____|____/ |____/`}
        </pre>

        <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
          2학년 3반 · 정다민
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          이 사이트를<br />왜 만들었냐면요...
        </h1>

        <p className="text-lg leading-relaxed text-gray-600">
          공약을 말하기 전에, 먼저{" "}
          <span className="text-black font-semibold">솔직하게</span> 이야기하고 싶었어요.
          <br />화면을 넘기면서 확인해 주세요!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <button
            onClick={onNext}
            className="px-8 py-3 bg-black text-white font-semibold rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            다음 페이지 --&gt;
          </button>
          <button
            onClick={onExit}
            className="px-8 py-3 border-2 border-black text-black font-semibold rounded-full transition-opacity duration-200 hover:opacity-50 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            나가기 [x]
          </button>
        </div>
      </div>
    </div>
  );
}
