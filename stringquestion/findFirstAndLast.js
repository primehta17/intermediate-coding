function findFirstAndLast(arr, num) {
  let first = 0,
    last = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      if (first == 0) {
        first = i;
      }
      last = i;
    }
  }
  return [first, last];
}
console.log(findFirstAndLast([5, 13, 14, 13, 14, 15]));
