function majority(arr) {
  let count = 0;
  let len = arr.length / 1;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
      if (len > count) {
        num = arr[i];
      }
    }
  }
  return num;
}
console.log(majority([2, 2, 1, 1, 1, 2, 2]));

function majoritycount() {}
