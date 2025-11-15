function solution(board) {
  // 1. O와 X 개수 세기
  let oCount = 0;
  let xCount = 0;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'O') oCount++;
      if (board[i][j] === 'X') xCount++;
    }
  }
  
  // 2. 턴 순서 검증
  if (oCount < xCount || oCount - xCount > 1) {
    return 0;
  }
  
  // 3. 승리 상태 확인
  const oWin = checkWin(board, 'O');
  const xWin = checkWin(board, 'X');
  
  // 4. 승리 후 종료 규칙 검증
  if (oWin && xWin) return 0; // 둘 다 승리 불가능
  
  if (oWin && oCount !== xCount + 1) return 0;
  if (xWin && oCount !== xCount) return 0;
  
  // 5. 초기 상태 검증
  if (xCount > 0 && oCount === 0) return 0;
  
  return 1;
}

function checkWin(board, player) {
  // 가로
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && 
        board[i][1] === player && 
        board[i][2] === player) {
      return true;
    }
  }
  
  // 세로
  for (let j = 0; j < 3; j++) {
    if (board[0][j] === player && 
        board[1][j] === player && 
        board[2][j] === player) {
      return true;
    }
  }
  
  // 대각선
  if (board[0][0] === player && 
      board[1][1] === player && 
      board[2][2] === player) {
    return true;
  }
  
  if (board[0][2] === player && 
      board[1][1] === player && 
      board[2][0] === player) {
    return true;
  }
  
  return false;
}