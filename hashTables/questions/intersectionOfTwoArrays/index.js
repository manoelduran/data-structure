/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//   const map = {};
//   const result = [];
//   for (let i = 0; i < nums1.length; i++) {
//     map[nums1[i]] = nums1[i];
//   }
//   for (let j = 0; j < nums2.length; j++) {
//     if (map.hasOwnProperty([nums2[j]])) {
//       // if the value is already in the map, return the value
//       result.push(nums2[j]);
//       // if the value is pushed to the result array, delete the value from the map
//       delete map[nums2[j]];
//     }
//   }
//   return result;
// };
// console.log("intersection", intersection([1, 2, 2, 1], [2, 2]));
// console.log("intersection", intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log("intersection", intersection([8, 0, 3], [0, 0]));

// more otimezied solution

var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  const result = [];

  for (const num of nums2) {
    if (set.has(num)) {
      result.push(num);
      set.delete(num); // Remove o elemento do conjunto para evitar duplicatas
    }
  }

  return result;
};

console.log("intersection", intersection([8, 0, 3], [0, 0]));
