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

function movezeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // let temp = arr[i];
      // arr[i] = arr[count];
      // arr[count] = temp;
      [arr[i], arr[count]] = [arr[count], arr[i]]; //swap
      count++;
    }
  }
  return arr;
}
console.log(movezeros([6, 0, 3, 2, 0, 2, 0]));
