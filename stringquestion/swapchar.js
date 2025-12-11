function swapchar(ch) {
  let str = ch.split("");
  for (let i = 0; i < str.length - 1; i += 2) {
    let temp = str[i];
    str[i] = str[i + 1];
    str[i + 1] = temp;
  }
  return str.join("");
}
console.log(swapchar("geeksofgeeks"));
