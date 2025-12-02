function is_array(arr) {
  return Array.isArray(arr) ? true : false;
}

function is_Array(arr) {
  console.log(toString.call(arr));
  if (toString.call(arr) === "[object Array]") {
    return true;
  }
  return false;
}

console.log(is_Array("w3resource"));

console.log(is_Array([1, 2, 4, 0]));
