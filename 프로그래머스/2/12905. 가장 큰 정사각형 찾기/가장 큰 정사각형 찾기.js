function solution(board) {
  const R = board.length;
  const C = board[0].length;
  let max = 0;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] === 1 && i > 0 && j > 0) {
        board[i][j] =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
      }
      max = Math.max(max, board[i][j]);
    }
  }

  return max * max;
}