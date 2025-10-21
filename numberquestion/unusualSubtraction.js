function unusualSubtraction(n, k) {
  let newnum = 0;
  if (n[n.length - 1] < k) {
    return newnum;
  }
  newnum = Number(n) - Number(k);
  return newnum;
}
console.log(unusualSubtraction("789", "3"));
console.log(unusualSubtraction("1000", "7"));
