"use client";

import { useState } from "react";
import TypeWriter from "./TypeWriter";

interface Props {
  onAccept: () => void;
  onSkip: () => void;
}

export default function PrincessModal({ onAccept, onSkip }: Props) {
  const [done, setDone] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-5">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-7 text-center space-y-6 animate-fade-slide-up">

        <h2 className="text-xl font-bold leading-tight" style={{ color: "#e879a0" }}>
          <TypeWriter
            text={"엇 그대여 우리반 친구는\n아닌것 같은데..\n혹시 공주님이신가요?"}
            speed={60}
            onDone={() => setDone(true)}
          />
        </h2>

        <div
          className="flex flex-col gap-3"
          style={{ opacity: done ? 1 : 0, transition: "opacity 0.5s" }}
        >
          <button
            onClick={onAccept}
            disabled={!done}
            className="w-full py-2.5 rounded-full text-sm font-medium text-white transition-opacity duration-200 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none"
            style={{ backgroundColor: "#e879a0" }}
          >
            네, 저는 공주님입니다
          </button>
          <button
            onClick={onSkip}
            disabled={!done}
            className="w-full py-2.5 rounded-full text-sm font-medium border border-black/20 text-black/60 hover:border-black/50 transition-[border-color] duration-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none"
          >
            아니요, 그냥 지나갈게요
          </button>
        </div>

      </div>
    </div>
  );
}
