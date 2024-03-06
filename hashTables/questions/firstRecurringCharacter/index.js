// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

const firstRecurringCharacter = (input) => {
  // O(n) time complexity
  // O(n) space complexity
  let map = {};
  for (let i = 0; i < input.length; i++) {
    // map = {
    // input[i]: true // if the value is already in the map, return the value
    // }
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = true;
    }
    console.log("map", map);
  }
  return undefined;
};

const result = firstRecurringCharacter([2, 5, 5, 2, 1, 3, 5, 1, 2, 4]);
console.log("result", result);
