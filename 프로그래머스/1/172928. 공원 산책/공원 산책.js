function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;
  const dir = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };

  let r, c;
  for (let i = 0; i < H; i++) {
    const j = park[i].indexOf("S");

    if (j !== -1) {
      r = i;
      c = j;
      break;
    }
  }

  for (const route of routes) {
    const [op, n] = route.split(" ");
    const [dr, dc] = dir[op];
    const dist = Number(n);
    let valid = true;

    for (let i = 1; i <= dist; i++) {
      const nr = r + dr * i;
      const nc = c + dc * i;
      if (nr < 0 || nr >= H || nc < 0 || nc >= W || park[nr][nc] === "X") {
        valid = false;
        break;
      }
    }

    if (valid) {
      r += dr * dist;
      c += dc * dist;
    }
  }

  return [r, c];
}