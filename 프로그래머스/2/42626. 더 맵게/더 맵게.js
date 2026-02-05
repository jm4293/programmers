function solution(scoville, K) {
  const heap = [];

  const push = (value) => {
    heap.push(value);
    let index = heap.length - 1;
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (heap[index] >= heap[parentIdx]) break;
      [heap[index], heap[parentIdx]] = [heap[parentIdx], heap[index]];
      index = parentIdx;
    }
  };

  const pop = () => {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();

    const min = heap[0];
    heap[0] = heap.pop();

    let index = 0;
    while (true) {
      const leftIdx = 2 * index + 1;
      const rightIdx = 2 * index + 2;
      let smallestIdx = index;

      if (leftIdx < heap.length && heap[leftIdx] < heap[smallestIdx]) {
        smallestIdx = leftIdx;
      }
      if (rightIdx < heap.length && heap[rightIdx] < heap[smallestIdx]) {
        smallestIdx = rightIdx;
      }

      if (smallestIdx === index) break;

      [heap[index], heap[smallestIdx]] = [heap[smallestIdx], heap[index]];
      index = smallestIdx;
    }
    return min;
  };

  // 1. 초기 힙 구성
  for (const s of scoville) {
    push(s);
  }

  let count = 0;

  // 2. 가장 작은 값이 K 이상이 될 때까지 반복
  while (heap.length >= 2 && heap[0] < K) {
    const first = pop(); // 가장 안 매운 음식
    const second = pop(); // 두 번째로 안 매운 음식

    const mixed = first + second * 2;
    push(mixed);
    count++;
  }

  // 3. 반복이 끝난 후, 가장 작은 값이 K 이상인지 확인
  if (heap[0] < K) {
    return -1;
  }

  return count;
}