function solution(video_len, pos, op_start, op_end, commands) {
  const toSec = (str) => {
    const [m, s] = str.split(":").map(Number);
    return m * 60 + s;
  };

  const toStr = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  let cur = toSec(pos);
  const videoLen = toSec(video_len);
  const opStart = toSec(op_start);
  const opEnd = toSec(op_end);

  if (cur >= opStart && cur <= opEnd) {
    cur = opEnd;
  }

  for (const cmd of commands) {
    if (cmd === "prev") {
      cur = Math.max(0, cur - 10);
    }

    if (cmd === "next") {
      cur = Math.min(videoLen, cur + 10);
    }

    if (cur >= opStart && cur <= opEnd) {
      cur = opEnd;
    }
  }

  return toStr(cur);
}
