function checkAbundant(nums) {
  let sum = 0;
  for (let i = 0; i < nums; i++) {
    if (nums % i == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(checkAbundant("18"));
