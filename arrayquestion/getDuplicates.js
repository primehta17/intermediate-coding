function getDuplicates(nums) {
  let seen = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let index = nums[i];
    if (seen[index] === undefined) {
      seen[index] = 1;
    } else if (seen[index] === 1) {
      result.push(index);
      seen[index] = 2;
    } else {
      seen[index]++;
    }
  }
  return result;
}
console.log(getDuplicates([10, 20, 20, 30, 40, 20, 10]));
