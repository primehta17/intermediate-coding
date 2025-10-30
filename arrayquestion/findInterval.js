function findInterval(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    }
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  return max - min;
}
console.log(findInterval([5, 2, 9, 1]));
