function newWordBuilder(word) {
  if (word.length <= 2) {
    return word;
  }
  return word[0] + word[1] + word[word.length - 2] + word[word.length - 1];
}
console.log(newWordBuilder("challenge"));
console.log(newWordBuilder("hi"));

function newWordBuilder(word) {
  if (word.length < 2) {
    return word; // or return "" if that fits better
  }
  return word.slice(0, 2) + word.slice(-2);
}

console.log(newWordBuilder("challenge")); // “chge”
console.log(newWordBuilder("hi")); // “hi”
console.log(newWordBuilder("a")); // “a”   (since length < 2)
