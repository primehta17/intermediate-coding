function checkComposite(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return "Composite";
    }
  }
  return "Not Composite";
}
console.log(checkComposite(4));
console.log(checkComposite(23));
