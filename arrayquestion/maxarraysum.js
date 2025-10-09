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

function maxarraysum(arr) {
  let sum = 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
console.log(maxarraysum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
