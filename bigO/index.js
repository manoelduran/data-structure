// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
//   "nemo",
// ];
// const large = new Array(100000).fill("nemo");
// // instructure to computer
// const findNemo = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("Found Nemo!");
//     }
//   }
// };

// findNemo(large); // O(n) --> Linear Time
// O(1) --> Constant Time

const boxes = [0, 1, 2, 3, 4, 5];
const logFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};
logFirstTwoBoxes(boxes); // O(2) --> O(1) // CONSTANT TIME

// // Function to generate a specific number of users with the given parameters
// function generateUsers(userCount) {
//   const users = [];
//   let t0 = performance.now();
//   for (let i = 0; i < userCount; i++) {
//     const user = {
//       id: i + 1,
//       name: `User ${i + 1}`,
//       age: Math.floor(Math.random() * 80) + 18, // Generates a random age between 18 and 97
//       email: `user${i + 1}@example.com`,
//     };
//     users.push(user);
//   }
//   let t1 = performance.now();
//   console.log("timer took to generate users" + (t1 - t0) + " milliseconds.");
//   return users;
// }

// // Function to find users with "1" in their ID
// const findUsers = (users) => {
//   let usersWithOneInId = [];
//   let t0 = performance.now();
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id.toString().includes("1")) {
//       console.log(users[i]);
//       usersWithOneInId.push(users[i]);
//     }
//   }
//   let t1 = performance.now();
//   console.log("timer took to find users" + (t1 - t0) + " milliseconds.");
//   return usersWithOneInId;
// };
// const findUsersWithoutLog = (users) => {
//   let usersWithOneInId = [];
//   let t0 = performance.now();
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id.toString().includes("1")) {
//       usersWithOneInId.push(users[i]);
//     }
//   }
//   let t1 = performance.now();
//   console.log(
//     "timer took to find users without log" + (t1 - t0) + " milliseconds."
//   );
//   return usersWithOneInId;
// };
// // generation users
// const generatedUsers = generateUsers(10);
// // finding users with "1" in their ID
// const usersWithLogn = findUsers(generatedUsers);
// const usersWithoutLog = findUsersWithoutLog(generatedUsers);

// exercise

function funChallenge(input) {
  let a = 10; //  O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // (O(n)
    anotherFunction(); // (O(n))
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
// Total 3 +  n + n + n + n = 3 + 4n = Big O(3 + 4n) = O(n)
funChallenge(2);

// exercise 2

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Big O = 4 + 7n = O(n)

anotherFunChallenge(10);

// Big O Rule Book:
// 1. Worst Case
// 2. Remove Constants
// 3. Different terms for inputs
// 4. Drop Non Dominants

// HEAP and STACK

// Space Complexity

function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booooo!");
  }
}

boooo([1, 2, 3, 4, 5]); // O(1) because we are just creating the variable i = 0

function arrayOfHiInTimes(n) {
  let hiArray = []; // data structure array
  for (
    // variable i = 0
    let i = 0;
    i < n;
    i++
  ) {
    hiArray[i] = "hi"; // fill array with loops
  }

  return hiArray;
}

arrayOfHiInTimes(6); // O(n)

// Twitter exercise

// Find 1st, Find Nth...
const array = [
  { tweet: "hi", date: 2022 },
  { tweet: "my", date: 2014 },
  { tweet: "teddy", date: 2018 },
];
array[0]; // "hi" O(1)
array[array.length - 1]; // "teddy" O(1)
