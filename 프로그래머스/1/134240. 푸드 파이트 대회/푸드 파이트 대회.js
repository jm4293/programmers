function solution(food) {
  let half = "";

  for (let i = 1; i < food.length; i++) {
    half += String(i).repeat(Math.floor(food[i] / 2));
  }

  return half + "0" + half.split("").reverse().join("");
}
