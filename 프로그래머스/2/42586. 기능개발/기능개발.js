function solution(progresses, speeds) {
  // 1. 각 기능의 완료 일수 계산
  const days = progresses.map((progress, index) => 
    Math.ceil((100 - progress) / speeds[index])
  );
  
  // 2. 배포 그룹핑
  const result = [];
  let maxDay = 0;
  
  days.forEach((day) => {
    if (day > maxDay) {
      // 새로운 배포 그룹 시작
      result.push(1);
      maxDay = day;
    } else {
      // 같은 배포 그룹에 추가
      result[result.length - 1]++;
    }
  });
  
  return result;
}