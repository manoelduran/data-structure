const reverse = (string) => {
  // transform the string into an array
  const n = string.split("");
  // create a new array to store the reversed string
  const reversed = [];
  // we need to put n.length -1 because the index of the array starts at 0, and in this case, we need to start at the last index
  for (i = n.length - 1; i >= 0; i--) {
    reversed.push(n[i]);
  }

  return reversed.join("");
};

console.log("reverse", reverse("Hello world!"));

// BIG O NOTATION
// TIME COMPLEXITY - O(n) - Linear Time - The time grows proportionally to the input
// MEMORY COMPLEXITY
