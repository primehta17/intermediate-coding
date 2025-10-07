let arr = [1, 2, 3, 4, 5];
let k = 3;
let temp = new Array();
for (let i = 0; i < arr.length; i++) {
  temp[(i + k) % arr.length] = arr[i];
}
console.log(temp);
