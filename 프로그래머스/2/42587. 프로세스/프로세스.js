function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({ priority, index }));
  let executionOrder = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
    } else {
      executionOrder++;

      if (current.index === location) {
        break;
      }
    }
  }

  return executionOrder;
}