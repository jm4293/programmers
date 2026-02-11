function solution(numbers) {
  const permutations = new Set();

  const generatePermutations = (current, remaining) => {
    if (current.length > 0) {
      permutations.add(parseInt(current, 10));
    }

    for (let i = 0; i < remaining.length; i++) {
      generatePermutations(
        current + remaining[i],
        remaining.slice(0, i) + remaining.slice(i + 1),
      );
    }
  };

  generatePermutations("", numbers);

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let primeCount = 0;
  permutations.forEach((num) => {
    if (isPrime(num)) {
      primeCount++;
    }
  });

  return primeCount;
}