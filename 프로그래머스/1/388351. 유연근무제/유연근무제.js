function solution(schedules, timelogs, startday) {
  let answer = 0;

  // 출근 인정 시각 계산 함수 (희망 시각 + 10분)
  function getDeadlineTime(schedule) {
    const hour = Math.floor(schedule / 100);
    const minute = schedule % 100;
    
    let newMinute = minute + 10;
    let newHour = hour;
    
    if (newMinute >= 60) {
      newHour += 1;
      newMinute -= 60;
    }
    
    return newHour * 100 + newMinute;
  }

  // 요일이 평일인지 확인 (1=월, 2=화, 3=수, 4=목, 5=금, 6=토, 7=일)
  function isWeekday(day) {
    return day >= 1 && day <= 5;
  }

  for (let i = 0; i < schedules.length; i++) {
    const schedule = schedules[i];
    const deadline = getDeadlineTime(schedule);
    const log = timelogs[i];
    
    let allOnTime = true;
    
    // 7일 동안 체크
    for (let day = 0; day < 7; day++) {
      const currentDay = ((startday - 1 + day) % 7) + 1; // 1~7로 변환
      
      // 평일만 체크
      if (isWeekday(currentDay)) {
        const arrivalTime = log[day];
        
        // 출근 인정 시각보다 늦으면 지각
        if (arrivalTime > deadline) {
          allOnTime = false;
          break;
        }
      }
    }
    
    if (allOnTime) {
      answer++;
    }
  }

  return answer;
}