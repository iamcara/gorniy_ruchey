import { GAME_SYMBOLS, MOVE_ORDER } from "../constants";
import { getNextMove } from "./get-next-move";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
};

export const initGameState = ({
  playerCount,
  defaultTimer,
  currentMoveStart,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  currentMoveStart,
  playerCount,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playerCount) {
      timers[symbol] = defaultTimer;
    }

    return timers;
  }, {}),
});

export const gameStateReducer = (state, action) => {
  const { index, now } = action;

  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      if (state.cells[index]) return state;

      return {
        ...state,
        timers: updateTimers(state, now),
        currentMoveStart: now,
        currentMove: getNextMove(state),
        cells: updateCell(state, index),
      };
    }

    case GAME_STATE_ACTIONS.TICK: {
      const { now } = action;

      if (!isTimeOver(state, now)) {
        return state;
      }

      return {
        ...state,
        timers: updateTimers(state, now),
        currentMoveStart: now,
        currentMove: getNextMove(state),
      };
    }

    default: {
      return state;
    }
  }
};

function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];

  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff,
  };
}

function updateCell(gameState, index) {
  return gameState.cells.map((cell, i) =>
    i === index ? gameState.currentMove : cell,
  );
}

// TODO : таймер продолжает идти после победы, при смене хода отображается NaN

function isTimeOver(gameState, now) {
  const timer = updateTimers(gameState, now)[gameState.currentMove];
  return timer <= 0;
}
