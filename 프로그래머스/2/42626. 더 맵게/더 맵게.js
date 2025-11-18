function createMinHeap() {
  const a = [];

  function up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);

      if (a[p] <= a[i]) {
        break;
      }

      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }

  function down(i) {
    const n = a.length;

    while (true) {
      let s = i;
      let l = i * 2 + 1;
      let r = l + 1;

      if (l < n && a[l] < a[s]) {
        s = l;
      }

      if (r < n && a[r] < a[s]) {
        s = r;
      }

      if (s === i) {
        break;
      }

      [a[i], a[s]] = [a[s], a[i]];
      i = s;
    }
  }

  return {
    size() {
      return a.length;
    },
    peek() {
      return a[0];
    },
    // 디버깅용: 배열 전체 확인
    debug() {
      return [...a];
    },
    push(x) {
      a.push(x);
      up(a.length - 1);
    },
    pop() {
      if (!a.length) {
        return undefined;
      }

      const top = a[0];
      const last = a.pop();

      if (a.length) {
        a[0] = last;
        down(0);
      }

      return top;
    },
  };
}

function solution(scoville, K) {
  const heap = createMinHeap();

  scoville.forEach((x) => heap.push(x));

  let count = 0;

  while (heap.size()) {
    if (heap.peek() >= K) {
      return count;
    }

    const first = heap.pop();

    if (heap.size() === 0) {
      return -1;
    }

    const second = heap.pop();
    heap.push(first + second * 2);
    count++;
  }
  return -1;
}