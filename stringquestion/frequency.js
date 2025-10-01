function frequency(str) {
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    let index = str[i];
    if (seen[index] === undefined) {
      seen[index] = 1;
    } else {
      seen[index]++;
    }
  }
  let sorted = Object.entries(seen).sort(function (a, b) {
    return b[1] - a[1]; // sort by frequency (descending)
  });

  // Step 3: array → object
  let result = {};
  for (let i = 0; i < sorted.length; i++) {
    result[sorted[i][0]] = sorted[i][1];
  }

  return result;
}
console.log(frequency("Applex"));
