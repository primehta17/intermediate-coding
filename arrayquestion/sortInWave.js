function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
function sortInWave(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    swap(arr, i, i + 1);
  }
  return arr.join(" ");
}
console.log(sortInWave([1, 2, 3, 4, 5]));
