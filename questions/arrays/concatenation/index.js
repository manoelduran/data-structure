// var getConcatenation = function (nums) {
//   var n = nums.length;
//   var ans = [];
//   for (i = 0; i < n; i++) {
//     console.log("i", i);
//     ans[i] = nums[i];
//     ans[i + n] = nums[i];
//   }
//   return ans;
// };
// Time complexity is O(n) and space complexity is O(n)
// const result = getConcatenation([1, 3, 2, 1]);
// console.log("result", result);
// In this questions we want to concatenate two arrays of nums, so we use the nums.length to get the indexes of ans
// after that we put the total length of nums to be part of the index to fill the other part of ans array

// Time complexity is O(n) and space complexity is O(1)

// var getConcatenation2 = function (nums) {
//   let ok = nums.length;
//   for (i = 0; i < ok; i++) {
//     nums[i + ok] = nums[i];
//   }
//   return nums;
// };
// // Time complexity is O(n) and space complexity is O(n)
// const result2 = getConcatenation2([1, 3, 2, 1]);
// console.log("result2", result2);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  let nums2 = nums.sort((a, b) => b - a);
  let array1 = [];
  let array2 = [];
  for (i = 0; i < nums2.length; i++) {
    if (array1.length <= array2.length) {
      if (!array1.includes(nums2[i])) {
        array1.push(nums2[i]);
      }
      if (array2.includes(nums2[i])) {
        array2.push(nums2[i]);
      }
    } else {
      if (!array2.includes(nums2[i])) {
        array2.push(nums2[i]);
      }
      if (!array1.includes(nums2[i])) {
        array1.push(nums2[i]);
      }
    }
  }
  if (array1.length == array2.length && array2.length == nums2.length / 2) {
    return true;
  } else {
    return false;
  }
};

const result2 = isPossibleToSplit([1, 2, 3, 4, 5, 6]);
console.log("result2", result2);

var isPossibleToSplit = function (nums) {
  nums = nums.sort((a, b) => b - a);
  let num1 = [];
  let num2 = [];

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (num1.length <= num2.length) {
      if (!num1.includes(n) && !num2.includes(n)) {
        num1.push(n);
      } else if (!num2.includes(n)) {
        num2.push(n);
      }
    } else {
      if (!num2.includes(n)) {
        num2.push(n);
      } else if (!num1.includes(n)) {
        num1.push(n);
      }
    }
  }

  return num1.length === num2.length && num2.length === nums.length / 2;
};
