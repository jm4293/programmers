function solution(enroll, referral, seller, amount) {
  const parentMap = new Map();
  const profitMap = new Map();

  enroll.forEach((name, index) => {
    parentMap.set(name, referral[index]);
    profitMap.set(name, 0);
  });

  function distributeProfit(name, profit) {
    if (name === '-' || profit < 1) return;

    const commission = Math.floor(profit * 0.1);
    const selfProfit = profit - commission;

    profitMap.set(name, profitMap.get(name) + selfProfit);
    distributeProfit(parentMap.get(name), commission);
  }

  seller.forEach((name, index) => {
    const totalProfit = amount[index] * 100;
    distributeProfit(name, totalProfit);
  });

  return enroll.map((name) => profitMap.get(name));
}
