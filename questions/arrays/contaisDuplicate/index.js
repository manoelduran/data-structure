var containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// TIME COMPLEXITY - O(n log n)
// SPACE COMPLEXITY - O(1)

var containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// TIME COMPLEXITY - O(n^2)
// SPACE COMPLEXITY - O(1)
