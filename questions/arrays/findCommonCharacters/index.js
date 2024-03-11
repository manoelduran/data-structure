/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const result = words[0].split("");

  const wordsWithoutTheFirst = words.slice(1);
  for (const word of wordsWithoutTheFirst) {
    let char = 0;
    const splittedWord = word.split("");

    while (char < result.length) {
      const index = splittedWord.indexOf(result[char]);

      if (index < 0) {
        result.splice(char, 1);
      } else {
        splittedWord.splice(index, 1);
        char++;
      }
    }
  }

  return result;
};
// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */

// var commonChars = function (words) {
//   const res = words[0].split("");
//   for (let w = 1; w < words.length; w++) {
//     let c = 0;
//     const word = words[w].split("");
//     while (c < res.length) {
//       const index = word.indexOf(res[c]);
//       if (index < 0) {
//         res.splice(c, 1);
//       } else {
//         word.splice(index, 1);
//         c++;
//       }
//     }
//   }
//   return res;
// };
console.log("one", commonChars(["bella", "label", "roller"]));
