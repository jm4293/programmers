function solution(id_list, report, k) {
  const arrPosition = {};
  id_list.forEach((e, idx) => {
    arrPosition[e] = idx;
  });

  const idMap = {};
  id_list.forEach((e) => {
    idMap[e] = new Set();
  });

  report.forEach((e) => {
    const [caller, cheater] = e.split(' ');
    idMap[caller].add(cheater);
  });

  const reported = {};
  for (const key in idMap) {
    idMap[key].forEach((cheater) => {
      reported[cheater] = reported[cheater] + 1 || 1;
    });
  }

  let answer = Array.from({ length: id_list.length }, () => 0);
  for (const key in idMap) {
    idMap[key].forEach((cheater) => {
      if (reported[cheater] >= k) {
        answer[arrPosition[key]] += 1;
      }
    });
  }

  return answer;
}