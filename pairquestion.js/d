function maxPairs(arr) {
  let pairs = 0;
  const obj = {};

  arr.forEach((i) => {
    if (obj[i]) {
      pairs += 1;
      obj[i] = 0;
    } else {
      obj[i] = 1;
    }
  });

  return pairs;
}

console.log(maxPairs([2, 2]));
console.log(maxPairs([5, 5, 5, 5]));
console.log(maxPairs([5, 5, 5, 5, 5, 5]));
console.log(maxPairs([5, 5, 2, 2, 3, 3, 3, 3]));
