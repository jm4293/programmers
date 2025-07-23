function solution(s, skip, index) {
  const skipSet = new Set(skip);
  const aCharCode = 'a'.charCodeAt(0);

  let result = '';

  for (const char of s) {
    let count = 0;
    let code = char.charCodeAt(0);

    while (count < index) {
      code += 1;
      if (code > 'z'.charCodeAt(0)) {
        code = aCharCode; 
      }

      if (!skipSet.has(String.fromCharCode(code))) {
        count += 1;
      }
    }
    result += String.fromCharCode(code);
  }

  return result;
}