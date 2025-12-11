// program to print Even length words in a String

function evenlength(len) {
  let str = len.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i].length % 2 == 0) {
      console.log(str[i]);
    }
  }
}
evenlength("i am i javascript developer");
