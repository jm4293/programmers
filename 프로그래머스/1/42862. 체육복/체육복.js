function solution(n, lost, reserve) {
  const students = Array.from({ length: n }, (_, i) => {
    const studentId = i + 1;
    const isLost = lost.includes(studentId);
    const isReserve = reserve.includes(studentId);
    
    return {
      id: studentId,
      lost: isLost && !isReserve,
      reserve: isReserve && !isLost,
    };
  });

  for (let i = 0; i < students.length; i++) {
    if (students[i].lost) {
      if (i > 0 && students[i - 1].reserve) {
        students[i - 1].reserve = false;
        students[i].lost = false;
      } 
      else if (i + 1 < students.length && students[i + 1].reserve) {
        students[i + 1].reserve = false;
        students[i].lost = false;
      }
    }
  }

  return students.filter((student) => !student.lost).length;
}