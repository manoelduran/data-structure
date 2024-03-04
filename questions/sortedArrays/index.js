const mergeSortedArrays = (arr1, arr2) => {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    result.push(arr2[j]);
  }

  return result.sort((a, b) => a - b);
};

console.log("mergeSortedArrays2", mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  return nums1;
};
console.log("merge 2", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
