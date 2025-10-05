function leftrotate(arr, k) {
  for (let j = 0; j < k; j++) {
    let left = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = left;
  }

  return arr;
}
console.log(leftrotate([1, 2, 3, 4, 5], 3));

function rightrotate(arr, k) {
  k = k % arr.length;
  for (let j = 0; j < k; j++) {
    let right = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = right;
  }
  return arr;
}
console.log(rightrotate([1, 2, 3, 4, 5], 3));

function rightrotaten(arr, k) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr[(i + k) % arr.length] = arr[i];
  }

  return newarr;
}
console.log(rightrotaten([1, 2, 3, 4, 5], 3));
