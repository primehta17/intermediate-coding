// Program to Get a Character from a String

function getCharacter(str, j) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == j) {
      console.log(i);
    }
  }
}
getCharacter("i am good developer", "a");
