function solution(keymap, targets) {
  const keyObj = {};

  keymap.forEach((key) => {
    key.split('').forEach((char, index) => {
      if (!keyObj[char] || keyObj[char] > index + 1) {
        keyObj[char] = index + 1;
      }
    });
  });

  return targets.map((target) => {
    let total = 0;

    for (const char of target.split('')) {
      if (keyObj[char]) {
        total += keyObj[char];
      } else {
        total = -1;
        break;
      }
    }

    if (total === 0) {
      total = -1;
    }

    return total;
  });
}
