function secMax(arr) {
  let max = arr[0];
  let secondmax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      secondmax = max;
      max = arr[i];
    } else if (max > arr[i] && secondmax < arr[i]) {
      secondmax = arr[i];
    }
  }
  return secondmax;
}
console.log(secMax([10, 30, 56, 43, 29, 64, 49, 60]));
