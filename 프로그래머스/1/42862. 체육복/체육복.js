function solution(n, lost, reserve) {
  const students = Array.from({ length: n }, (_, i) => {
    const studentId = i + 1;
    const isLost = lost.includes(studentId);
    const isReserve = reserve.includes(studentId);
    
    // 중복 처리: 둘 다 있으면 자기 자신이 사용 (둘 다 false)
    return {
      id: studentId,
      lost: isLost && !isReserve,
      reserve: isReserve && !isLost,
    };
  });

  for (let i = 0; i < students.length; i++) {
    if (students[i].lost) {
      // 앞번호(-1) 우선 확인 (그리디 전략)
      if (i > 0 && students[i - 1].reserve) {
        students[i - 1].reserve = false;
        students[i].lost = false;
      } 
      // 뒷번호(+1) 확인
      else if (i + 1 < students.length && students[i + 1].reserve) {
        students[i + 1].reserve = false;
        students[i].lost = false;
      }
    }
  }

  return students.filter((student) => !student.lost).length;
}