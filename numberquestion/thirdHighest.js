function thirdHigh(arr) {
  let max = 0;
  let second = 0;
  let third = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      second = max;
      max = arr[i];
    } else if (max > arr[i] && second < arr[i]) {
      third = second;
      second = arr[i];
    } else if (second > arr[i] && third < arr[i]) {
      third = arr[i];
    }
  }
  return third;
}
console.log(thirdHigh([48, 35, 43, 66, 55, 45]));
