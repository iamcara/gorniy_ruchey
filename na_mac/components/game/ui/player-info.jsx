import Image from "next/image";
import { useNow } from "../lib/timers";
import { GameSymbol } from "./game-symbol";

export function PlayerInfo({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  timer,
  timerStartAt,
}) {
  const now = useNow(1000, timerStartAt);
  const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);

  const seconds = Math.ceil(mils / 1000);

  const minuteStr = String(Math.floor(seconds / 60)).padStart("2", "0");
  const secondStr = String(seconds % 60).padStart("2", "0");

  const isTimeUp = seconds < 10;

  return (
    <div className="flex gap-3 items-center">
      <div className={`relative  ${isRight && "order-3"}`}>
        <div className="flex items-center gap-2 text-start w-44">
          <Image
            src={avatar}
            className="w-14 rounded-full"
            alt="avatar"
            width={48}
            height={48}
            unoptimized
          />
          <div className="overflow-hidden">
            <div className="text-teal-600 hover:text-teal-400 text-xl transition-colors truncate">
              {name}
            </div>
            <div className="text-slate-800 text-sm">Rate : {rating}</div>
          </div>
        </div>

        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center flex">
          <GameSymbol symbol={symbol} className="w-3 h-3" />
        </div>
      </div>

      <div className={`h-6 w-px bg-slate-200 ${isRight && "order-2"}`} />
      <div
        className={`font-semibold text-lg w-16
            ${isRight && "order-1"}
            ${!timerStartAt && "text-slate-300"}
            ${isTimeUp && "text-orange-500"}
        `}
      >
        {minuteStr}:{secondStr}
      </div>
    </div>
  );
}
