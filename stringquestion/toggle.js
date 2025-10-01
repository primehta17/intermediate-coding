let str = "AppleZ";
let newstr = "";
for (let i = 0; i < str.length; i++) {
  if (
    str.charAt(i) >= String.fromCharCode(97) &&
    str.charAt(i) <= String.fromCharCode(117)
  ) {
    newstr += str[i].toUpperCase();
  } else if (
    str.charAt(i) >= String.fromCharCode(65) &&
    str.charAt(i) <= String.fromCharCode(90)
  ) {
    newstr += str.charAt(i).toLowerCase();
  }
}
// console.log(newstr);

let newchar = "";
for (let i = 0; i < str.length; i++) {
  if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
    newchar += String.fromCharCode(str[i].charCodeAt() + 32);
  } else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
    newchar += String.fromCharCode(str[i].charCodeAt() - 32);
  }
}
console.log(newchar);
