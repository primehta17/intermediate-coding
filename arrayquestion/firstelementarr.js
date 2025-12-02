function join(arr) {
  console.log(arr.toString());
  console.log(arr.join(" , "));
  console.log(arr.join(" + "));
}
join(["Red", "Green", "White", "Black"]);

function ascendingsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(ascendingsort([-3, 8, 7, 6, 5, -4, 3, 2, 1]));

function decendingsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(decendingsort([-3, 8, 7, 6, 5, -4, 3, 2, 1]));
