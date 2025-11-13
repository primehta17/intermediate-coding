let arr = [1, [2, 3], 4, [5, 6]];

function flatten(arr) {
  let newarr = [];
  let t = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let k = 0; k < arr.length; k++) {
        newarr.push(t.push(arr[i]));
      }
    } else {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(flatten(arr));
