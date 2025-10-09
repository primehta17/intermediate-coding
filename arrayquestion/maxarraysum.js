function subarray(arr) {
  let i = 0;
  let sum = 0,
    max = 0;
  while (i < arr.length) {
    sum = sum + arr[i];
    max = Math.max(max, sum);
    i++;
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
console.log(subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
