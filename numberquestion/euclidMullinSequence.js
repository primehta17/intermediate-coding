function isPrime(num) {
  for (let i = 2; i * i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function euclidMullinSequence(n) {
  if (n <= 0) return [];
  let result = [2];
  let product = 2;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
}
console.log(euclidMullinSequence(6));
