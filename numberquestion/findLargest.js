function findLargest(num) {
  num = String(num).split("");
  let max = num[0];
  let maxIndex = 0;
  for (let i = 1; i < num.length; i++) {
    if (max < num[i]) {
      max = num[i];
      maxIndex = i;
    }
  }
  let temp = num[maxIndex];
  num[maxIndex] = num[0];
  num[0] = temp;

  return num.join("");
}
console.log(findLargest("5736"));
