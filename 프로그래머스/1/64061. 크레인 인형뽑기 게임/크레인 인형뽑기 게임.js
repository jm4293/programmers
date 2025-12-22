function solution(board, moves) {
  const boardLength = board[0].length;
  let bucket = [];
  let count = 0;

  moves.map((element, index) => {
    for (let i = 0; i < boardLength; i++) {
      if (board[i][element - 1] !== 0) {
        bucket.push(board[i][element - 1]);
        board[i][element - 1] = 0;
        break;
      }
    }


    if (bucket[bucket.length - 2] === bucket[bucket.length - 1] && bucket[bucket.length - 2] !== undefined && bucket[bucket.length - 1] !== undefined)
    {
      bucket.splice(bucket.length - 2, 2);
      count += 1;
    }
  });

 return count * 2;
}