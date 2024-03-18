/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const object = {};
  const result = [];
  for (const num of nums1) {
    if (object[num]) {
      object[num] += 1;
    } else {
      object[num] = 1;
    }
  }

  for (const num of nums2) {
    if (object[num] > 0) {
      result.push(num);
      object[num] -= 1;
    }
  }
  return result;
};

console.log("das", intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log("dasdasdsa", intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
