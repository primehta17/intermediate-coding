function findLongestAscendingSequence(arr) {
  let maxLength = 1;
  let currentLength = 1;
  if (arr.length < 0) return 0;

  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1]);
    if (arr[i] > arr[i - 1]) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }
  return maxLength;
}
console.log(findLongestAscendingSequence([1, 3, 2, 4, 5]));
// console.log(findLongestAscendingSequence([4, 1, 3, 4, 4, 5, 6, 7]));
