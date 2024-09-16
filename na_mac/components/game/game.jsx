import { useState } from "react";
import { GAME_STATE_ACTIONS } from "./model/game-state-reducer";

import { PLAYERS } from "./constants";

import { BackLink } from "./ui/back-link";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";

import { GameOverModal } from "./ui/game-over-modal";

import { UiButton } from "../uikit/ui-button";

import { useReducer } from "react";
import { useInterval } from "./lib/timers";
import { computePlayerTimer } from "./model/compute-player-timer";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { gameStateReducer, initGameState } from "./model/game-state-reducer";
import { getNextMove } from "./model/get-next-move";

/*
 * добавил стейт для playerCount
 */

export function Game() {
  const [playerCount] = useState(4);

  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playerCount: playerCount,
      defaultTimer: 10000, // ms
      currentMoveStart: Date.now(),
    },
    initGameState,
  );

  useInterval(1000, gameState.currentMoveStart, () => {
    dispatch({ type: GAME_STATE_ACTIONS.TICK, now: Date.now() });
  });

  const winnerSequence = computeWinner(gameState.cells);
  const nextMove = getNextMove(gameState);

  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const actions = (
    <>
      <UiButton variant="primary" size="md">
        Ничья
      </UiButton>
      <UiButton variant="outline" size="md">
        Сдаться
      </UiButton>
    </>
  );

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            playerCount={playerCount}
            timeMod="10 сек на ход"
          />
        }
        playersList={PLAYERS.slice(0, playerCount).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );

          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              timer={timer}
              timerStartAt={timerStartAt}
              symbol={player.symbol}
              isRight={index % 2 === 1}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMove}
            nextMove={nextMove}
          />
        }
        actions={actions}
        gameCells={gameState.cells.map((cell, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() => {
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index,
                now: Date.now(),
              });
            }}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        players={PLAYERS.slice(0, playerCount).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            timer={gameState.timers[player.symbol]}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
        winnerName={winnerPlayer?.name}
      />
    </>
  );
}
