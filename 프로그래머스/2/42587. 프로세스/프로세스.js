function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({ priority, location: index }));

  const result = [];

  while (queue.length) {
    const current = queue.shift();

    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
    } else {
      result.push(current);
    }
  }

  return result.findIndex((item) => item.location === location) + 1;
}