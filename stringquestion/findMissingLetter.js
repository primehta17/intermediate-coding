function findMissingLetter(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let a = arr[i].charCodeAt(0);
    let b = arr[i + 1].charCodeAt(0);
    if (b !== a + 1) {
      return String.fromCharCode(a + 1);
    }
  }
  return undefined;
}
console.log(findMissingLetter("abde"));
