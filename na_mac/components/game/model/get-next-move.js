/**
 *
 * @param {*} currentMove
 * @param {int} playerCount
 * @returns {string}
 */

import { MOVE_ORDER } from "../constants";

export function getNextMove({ currentMove, playerCount, timers }) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playerCount).filter(
    (symbol) => timers[symbol] > 0,
  );

  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
