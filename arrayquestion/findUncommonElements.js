function findUncommonElements(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  let seen = {};
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let abc = arr[i];
    if (seen[abc] === undefined) {
      seen[abc] = 1;
    } else {
      seen[abc]++;
    }
  }
  for (let num in seen) {
    if (seen[num] === 1) {
      newarr.push(Number(num));
    }
  }
  return newarr;
}
console.log(findUncommonElements([1, 2, 3], [3, 4, 5]));
