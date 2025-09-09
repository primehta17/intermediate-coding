function kStart(k, n) {
  let result = [];
  for (let i = k; i < k + n; i++) {
    result.push(i);
  }
  return result;
}
console.log(kStart(3, 5));
