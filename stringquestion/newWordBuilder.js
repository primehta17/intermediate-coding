function newWordBuilder(word) {
  if (word.length <= 2) {
    return word;
  }
  return word[0] + word[1] + word[word.length - 2] + word[word.length - 1];
}
console.log(newWordBuilder("challenge"));
console.log(newWordBuilder("hi"));
