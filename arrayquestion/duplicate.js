var removeDuplicates = function (nums) {
  let seen = {};
  let dup = [];
  for (let i = 0; i < nums.length; i++) {
    let index = nums[i];
    if (seen[index] == undefined) {
      dup.push(index);
      seen[index] = 1;
    } else {
      seen[index]++;
    }
  }
  return dup;
};
console.log(removeDuplicates([0, 1, 1, 2]));

var removeDuplicatesset = function (nums) {
  let set = new Set(nums);
  console.log([...set]);
};
console.log(removeDuplicatesset([0, 1, 1, 2]));
