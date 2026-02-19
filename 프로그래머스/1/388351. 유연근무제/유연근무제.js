function addTenMinutes(time) {
  let hour = Math.floor(time / 100);
  let min = time % 100;
  min += 10;

  if (min >= 60) {
    hour += 1;
    min -= 60;
  }

  return hour * 100 + min;
}

function solution(schedules, timelogs, startday) {
  let answer = 0;

  for (let i = 0; i < schedules.length; i++) {
    let isLate = false;

    for (let j = 0; j < timelogs[i].length; j++) {
      let dayOfWeek = (startday - 1 + j) % 7;

      if (dayOfWeek === 5 || dayOfWeek === 6) {
        continue;
      }

      let limit = addTenMinutes(schedules[i]);
      if (timelogs[i][j] > limit) {
        isLate = true;
        break;
      }
    }

    if (!isLate) {
      answer++;
    }
  }

  return answer;
}
