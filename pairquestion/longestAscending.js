function findLongestAscendingSequence(arr) {
  if (arr.length === 0) return 0;

  let maxLen = 1;
  let currentLen = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentLen++;
      maxLen = Math.max(maxLen, currentLen);
    } else {
      currentLen = 1;
    }
  }

  return maxLen;
}
console.log(findLongestAscendingSequence([1, 3, 2, 4, 5]));
