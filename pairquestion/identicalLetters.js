function hasConsecutiveIdenticalLetters(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(hasConsecutiveIdenticalLetters("HouseKeeper"));
console.log(hasConsecutiveIdenticalLetters("globe"));
