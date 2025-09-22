class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    this._bubbleUp();
  }
  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();

    return min;
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  _bubbleUp() {
    let idx = this.heap.length - 1;

    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);

      if (this.heap[parent] <= this.heap[idx]) {
        break;
      }

      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  _bubbleDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let smallest = idx;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === idx) {
        break;
      }

      [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
      idx = smallest;
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();

  for (const s of scoville) {
    heap.push(s);
  }

  let answer = 0;

  while (heap.size() > 1 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();
    heap.push(first + second * 2);
    answer++;
  }
  
  return heap.peek() >= K ? answer : -1;
}