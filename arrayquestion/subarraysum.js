function subarraysum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i; j < arr.length; j++) {
      temp += arr[j];
      result += temp;
    }
  }
  return result;
}

console.log(subarraysum([1, 4, 5, 3, 2]));
