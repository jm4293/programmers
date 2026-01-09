function solution(friends, gifts) {
  // 각 친구별로 주고받은 선물의 수를 기록
  let giftCounts = {};
  friends.forEach((friend) => {
    giftCounts[friend] = friends.reduce((acc, cur) => {
      acc[cur] = { given: 0, received: 0 };
      return acc;
    }, {});
  });

  // 선물 기록 분석
  gifts.forEach((el) => {
    let [giver, receiver] = el.split(' ');
    giftCounts[giver][receiver].given++;
    giftCounts[receiver][giver].received++;
  });

  // 선물 지수 계산
  let giftScores = {};
  friends.forEach((el) => {
    let totalGiven = 0;
    let totalReceived = 0;

    for (let other in giftCounts[el]) {
      totalGiven += giftCounts[el][other].given;
      totalReceived += giftCounts[el][other].received;
    }
    giftScores[el] = totalGiven - totalReceived;
  });

  // 다음 달 선물 예측
  let nextMonthGifts = friends.map((el) => {
    let giftsReceived = 0;

    friends.forEach((el2) => {
      if (el !== el2) {
        if (giftCounts[el][el2].given > giftCounts[el][el2].received) {
          giftsReceived++;
        } else if (giftCounts[el][el2].given === giftCounts[el][el2].received) {
          if (giftScores[el] > giftScores[el2]) {
            giftsReceived++;
          }
        }
      }
    });
    return giftsReceived;
  });

  // 가장 많은 선물을 받을 친구 찾기
  return Math.max(...nextMonthGifts)
}