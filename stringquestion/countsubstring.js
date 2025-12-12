function countsubstr(str, num) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let j = i; j < str.length; j++) {
      temp += str[j];

      result.push(temp);
    }
  }
  let n = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i].length >= 2) {
      n.push(result[i]);
    }
  }
  return n;
}
console.log(countsubstr("abc", 2));
