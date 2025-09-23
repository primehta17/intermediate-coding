function checkIdenticalSublists(list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return "Not identical";
    }
  }
  return "Identical";
}
console.log(checkIdenticalSublists([4, 5, 6], [4, 5]));
console.log(checkIdenticalSublists([4, 5], [4, 5]));
