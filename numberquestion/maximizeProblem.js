function maximizeProblem(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * i;
  }
  return sum;
}
console.log(maximizeProblem([10, 15, 20, 25]));
