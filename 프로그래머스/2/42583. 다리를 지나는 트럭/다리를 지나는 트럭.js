function solution(bridge_length, weight, truck_weights) {
  // 다리 위 트럭 큐: {weight: 무게, time: 다리에 올라간 시간}
  const bridge = [];
  let time = 0;
  let truckIndex = 0;
  let currentWeight = 0; // 현재 다리 위 총 무게

  // 모든 트럭이 다리를 건널 때까지 반복
  while (truckIndex < truck_weights.length || bridge.length > 0) {
    time++;

    // 1. 다리 위 트럭 이동 확인
    // 다리에 올라간 시간 + bridge_length = 다리를 건넌 시간
    if (bridge.length > 0 && time - bridge[0].time === bridge_length) {
      // 다리를 완전히 건넌 트럭 제거
      const finishedTruck = bridge.shift();
      currentWeight -= finishedTruck.weight;
    }

    // 2. 새 트럭을 다리에 올릴 수 있는지 확인
    if (truckIndex < truck_weights.length) {
      const nextTruck = truck_weights[truckIndex];

      // 무게 제한과 길이 제한 확인
      if (currentWeight + nextTruck <= weight && bridge.length < bridge_length) {
        bridge.push({ weight: nextTruck, time: time });
        currentWeight += nextTruck;
        truckIndex++;
      }
    }
  }

  return time;
}
