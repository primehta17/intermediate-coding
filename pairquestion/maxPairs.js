function maxPairs(arr) {
  let pairs = 0;
  let obj = {};
  arr.forEach((element) => {
    if (obj[element]) {
      pairs++;
      obj[element] = 0;
    } else {
      obj[element] = 1;
    }
  });
  return pairs;
}

console.log(maxPairs([2, 2]));
console.log(maxPairs([5, 5, 5, 5]));
console.log(maxPairs([5, 5, 5, 5, 5, 5]));
console.log(maxPairs([5, 5, 2, 2, 3, 3, 3, 3]));
