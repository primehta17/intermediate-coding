function calculateDifference(number) {
  number = String(number);
  let max = number[0];
  let min = number[0];
  let mid = number[0];

  for (let i = 0; i < number.length; i++) {
    if (max < number[i]) {
      max = number[i];
    }
    if (min > number[i]) {
      min = number[i];
    }
    if (!min || !max) {
      mid = number[i];
    }
  }
  let a = `${max}${mid}${min}`;
  let b = `${min}${mid}${max}`;
  return a - b;
}
console.log(calculateDifference("213"));
