const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

let text = "";
fruits.forEach((key, value) => {
  text += value + " = " + key + "\n";
});
console.log(fruits);
console.log(text);
