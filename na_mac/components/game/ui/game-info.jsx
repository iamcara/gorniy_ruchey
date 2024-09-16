import { HistoryIcon } from "./icons/history-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";

export function GameInfo({ playerCount, isRatingGame, timeMod }) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRatingGame && <StarIcon className="w-3" />}

      <div className="flex items-center gap-1">
        <UserIcon className="w-3" /> {playerCount}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon className="w-3" /> {timeMod}
      </div>
    </div>
  );
}
