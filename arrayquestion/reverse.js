function reversewithextraspace(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}
console.log(reversewithextraspace([10, 20, 30, 40, 50]));

function reversewithtempextraspace(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}
console.log(reversewithtempextraspace([10, 20, 30, 40, 50]));

function reversewithoutextraspace(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
    i++;
    j--;
  }
  return arr;
}
console.log(reversewithoutextraspace([10, 20, 30, 40, 50]));

let a = 2;
let b = 3;
a = a + b;
b = a - b;
a = a - b;
console.log(b);
console.log(a);
