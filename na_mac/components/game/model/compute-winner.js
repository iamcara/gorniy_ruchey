/**
 TODO : проверять клетки только вокруг последнего хода
 * проверять все заполненные клетки на каждом ходу излишне
 т.е. проверять квадрат 3х3 вокруг клетки, куда поставили условный крестик

 * @param {Array} cells
 * @param {int} sequenceSize
 * @param {int} fieldSize
 *
 * @returns {Array | undefined}
 * ?? @/param {int} currentMoveCell
 */

export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(ids) {
    let result = true;

    for (let i = 1; i < ids.length; i++) {
      result &&= !!cells[ids[i]];
      result &&= cells[ids[i]] === cells[ids[i - 1]];
    }

    return result;
  }

  function getSequenceIds(index) {
    // победные комбы от любой точки
    const res = [
      [], // -
      [], // \
      [], // |
      [], // |
    ];

    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(j - gap + index);
      res[1].push(fieldSize * (j - gap) + (j - gap) + index);
      res[2].push(-(fieldSize * (j - gap) + (j - gap) + index));
      res[3].push(fieldSize * (j - gap) + index);
    }

    const x = index % fieldSize;

    if (x < gap || x >= fieldSize - gap) {
      res.shift();
      res.shift();
      res.shift();
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRow = getSequenceIds(i);
      const winnerIds = indexRow.find((row) => compareElements(row));

      if (winnerIds) return winnerIds;
    }
  }

  return undefined;
}
