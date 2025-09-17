function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = new Array(bridge_length).fill(0);
  let currentWeight = 0;

  while (bridge.length > 0) {
    time += 1;

    const exited = bridge.shift();
    currentWeight -= exited;

    if (truck_weights.length > 0) {
      if (currentWeight + truck_weights[0] <= weight) {
        const truck = truck_weights.shift();

        bridge.push(truck);
        currentWeight += truck;
      } else {
        bridge.push(0);
      }
    }
  }

  return time;
}