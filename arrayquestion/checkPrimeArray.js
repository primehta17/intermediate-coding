function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function checkPrimeArray(arr) {
  for (let j = 0; j < arr.length; j++) {
    if (!isPrime(arr[j])) {
      return "Not Primes";
    }
  }
  return "Primes";
}

console.log(checkPrimeArray([2, 3, 5, 7]));
console.log(checkPrimeArray([11, 12, 17, 19]));
