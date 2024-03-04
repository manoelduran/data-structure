var removeDuplicates = function (nums) {
  const result = [];
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      result[k] = nums[i];
      k++;
    }
  }
  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }
  return result;
};

console.log("removeDuplicates", removeDuplicates([1, 1, 2]));
