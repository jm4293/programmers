function solution(video_len, pos, op_start, op_end, commands) {
  // "mm:ss" 형식을 초 단위로 변환
  function timeToSeconds(timeStr) {
    const [mm, ss] = timeStr.split(':').map(Number);
    return mm * 60 + ss;
  }
  
  // 초 단위를 "mm:ss" 형식으로 변환
  function secondsToTime(seconds) {
    const mm = Math.floor(seconds / 60);
    const ss = seconds % 60;
    return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
  }
  
  // 현재 위치를 초 단위로 변환
  let currentSeconds = timeToSeconds(pos);
  const videoLenSeconds = timeToSeconds(video_len);
  const opStartSeconds = timeToSeconds(op_start);
  const opEndSeconds = timeToSeconds(op_end);
  
  // 오프닝 구간 체크 함수
  function checkOpening() {
    if (currentSeconds >= opStartSeconds && currentSeconds <= opEndSeconds) {
      currentSeconds = opEndSeconds;
    }
  }
  
  // 시작 위치가 오프닝 구간인지 체크
  checkOpening();
  
  // 명령 처리
  for (const command of commands) {
    if (command === 'prev') {
      // 10초 전으로 이동
      if (currentSeconds < 10) {
        currentSeconds = 0;
      } else {
        currentSeconds -= 10;
      }
    } else if (command === 'next') {
      // 10초 후로 이동
      if (currentSeconds + 10 > videoLenSeconds) {
        currentSeconds = videoLenSeconds;
      } else {
        currentSeconds += 10;
      }
    }
    
    // 명령 실행 후 오프닝 구간 체크
    checkOpening();
  }
  
  return secondsToTime(currentSeconds);
}