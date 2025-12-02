function highfreq(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    if (seen[index] === undefined) {
      seen[index] = 1;
    } else {
      seen[index]++;
    }
  }
  let maxCount = 0;
  let value;
  for (let i in seen) {
    if (seen[i] > maxCount) {
      maxCount = seen[i];
      value = i;
    }
  }
  return `${value} (${maxCount} times)`;
}
console.log(highfreq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
