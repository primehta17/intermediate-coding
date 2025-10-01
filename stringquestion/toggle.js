let str = "Apple";
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
console.log(newstr);
