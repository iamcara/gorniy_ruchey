import { GameSymbol } from "./game-symbol";

export function GameCell({ onClick, isWinner, disabled, symbol }) {
  return (
    <button
      className={`border border-slate-200 -ml-px -mt-px flex items-center justify-center
        ${isWinner && "bg-orange-600/10"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
}
