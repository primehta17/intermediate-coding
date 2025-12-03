function movezero(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newarr.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(movezero([6, 0, 3, 2, 0, 2, 0]));
