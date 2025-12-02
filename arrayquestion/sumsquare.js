// Sum of Squares in Array

function sumSquare(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}
console.log(sumSquare([1, 2, 3, 4]));
