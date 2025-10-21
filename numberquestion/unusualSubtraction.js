function unusualSubtraction(n, k) {
  let newnum = 0;
  let last = n % 10;
  if (last < k) {
    return newnum;
  }
  newnum = Number(n) - Number(k);
  return newnum;
}
console.log(unusualSubtraction("789", "3"));
console.log(unusualSubtraction("1000", "7"));
