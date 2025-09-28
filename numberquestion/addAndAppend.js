function addAndAppend(num1, num2) {
  let sum = num1 + num2;
  return Math.floor(`${num1}${num2}${sum}`);
}
console.log(addAndAppend(4, 5));
