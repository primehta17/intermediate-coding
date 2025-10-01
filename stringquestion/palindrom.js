let str = "malayalamq";
let i = 0;
let j = str.length - 1;
let palindrom = true;
while (i < j) {
  if (str.charAt(i) !== str[j]) {
    palindrom = false;
    break;
  }
  i++;
  j--;
}
if (palindrom) {
  console.log("palindrom");
} else {
  console.log("Not Palindrom");
}
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str.charAt(i);
}
if (reverse === str) {
  console.log("palindrom");
} else {
  console.log("Not Palindrom");
}
