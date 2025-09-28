function splitItemCode(itemCode) {
  let result = [];
  let current = "";

  for (let i = 0; i < itemCode.length; i++) {
    let char = itemCode[i];
    if (char == "-") {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  if (current !== "") {
    result.push(current);
  }
  return result;
}
console.log(splitItemCode("ABC-123-XYZ"));
