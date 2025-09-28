function checkStraightNumber(num) {
  const arr = String(num).split("");
  for (let i = 0; i < arr.length - 1; i++) {
    if (parseInt(arr[i]) >= parseInt(arr[i + 1])) {
      return "Not Straight";
    }
  }
  return "Straight";
}
console.log(checkStraightNumber("12347"));
