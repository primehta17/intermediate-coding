function repeat(str, n) {
  let newstr = "";
  for (let i = 0; i < n; i++) {
    newstr += str;
  }
  return newstr;
}
console.log(repeat("Ha!", 2));
