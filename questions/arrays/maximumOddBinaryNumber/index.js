/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let n = s.split("");
  let lastItem = "";
  let firstItem = "";
  for (let i = 0; i < n.length; i++) {
    if (n[i] === "1" && lastItem === "") {
      lastItem = n[i];
      n.splice(i, 1);
      i--;
    }
    if (n[i] === "1" && lastItem === "1" && firstItem === "") {
      firstItem = n[i];
      n.splice(i, 1);
      i--;
      n.unshift(firstItem);
    }
  }
  n.sort((a, b) => b - a);
  n.push(lastItem);
  return n.join("");
};
maximumOddBinaryNumber("11");
