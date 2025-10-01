function movezeros(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "1") {
      result.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "0") {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(movezeros([0, 1, 0, 1, 0, 0, 1, 0, 1]));

function movezeroswhile(arr) {
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
    i++;
  }

  return arr;
}
console.log(movezeroswhile([0, 1, 0, 1, 0, 0, 1, 0, 1]));

function movezerosfor(arr) {
  let i = 0;
  let j = 0;
  for (; i < arr.length; i++) {
    if (arr[i] == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }

  return arr;
}
console.log(movezerosfor([0, 1, 0, 1, 0, 0, 1, 0, 1]));
