let str = "malayalam";
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
