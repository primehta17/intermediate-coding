function convertToPascalCase(str) {
  let split = str.split(" ");
  let s = "";
  for (let i = 0; i < split.length; i++) {
    if (split[i][0]) {
      s += split[i][0].toUpperCase() + split[i].slice(1);
    }
  }
  return s;
}
console.log(convertToPascalCase("hello world fellow"));
