function rotateleftarrayone(arr) {
  let last = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = last;
  return arr;
}
console.log(rotateleftarrayone([1, 2, 3, 4, 5], 1)); //[2,3,4,5,1]

function rotaterightarrayone(arr) {
  let first = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = first;
  return arr;
}
console.log(rotaterightarrayone([1, 2, 3, 4, 5], 1)); //[5,1,2,3,4]
