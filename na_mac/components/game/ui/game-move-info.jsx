import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl font-semibold">
        Ход : <GameSymbol symbol={currentMove} className="w-4 h-4" />
      </div>
      <div className="flex items-center gap-1 text-xs text-slate-400">
        Следующий : <GameSymbol symbol={nextMove} className="w-4 h-4" />
      </div>
    </>
  );
}
