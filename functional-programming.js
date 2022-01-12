// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// ##########################
// # Higher-Order Functions #
// ##########################

// Challenge 1
const addTwo = (num) => {
  if (typeof num !== "number") {
    return `${num} must be a number in order to add 2`;
  }
  return num + 2;
};

// To check if you've completed this function, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo('hello'));

// Challenge 2
const addS = (word) => {
  if (typeof word !== "string") {
    return `${word} is not a string`;
  }

  return word + "s";
};

// Uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3

const map = (array, callback) => {
  const new_array = [];

  for (let i = 0; i < array.length; i++) {
    console.log(i);
    new_array.push(callback(array[i]));
  }

  return new_array;
};

// console.log(map([1, 2, 3], a => a * 2));

// Challenge 4

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

const addChar = (char) => (alphabets += char);

let alphabets = "";
const letters = ["a", "b", "c", "d"];

// forEach(letters, addChar)
// console.log(alphabets)

// See for yourself if your forEach works!

// Challenge 5
const mapWith = (array, callback) => {
  callback(array, addChar);
};

mapWith(letters, forEach);
// console.log(alphabets)

// Challenge 6

const reduce = (array, howToCombine, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = howToCombine(initialValue, array[i]);
  }
  return initialValue;
};

const add = (a, b) => a + b;

const array = [1, 2, 3, 4, 5];
const reduceNum = reduce(array, add, 0);
// console.log(reduceNum)

// let buildingUp = []
// Challenge 7
const intersection = (a, b, c) => {
  let arrays = [a, b, c];

  let buildingUp = [];

  let howToReduce = (buildUp, array) => {
    // console.log(array)
    if (buildUp.length === 0) {
      return array;
    } else {
      let common = [];
      for (let k = 0; k < buildUp.length; k++) {
        if (array.includes(buildUp[k])) {
          common.push(buildUp[k]);
        }
      }
      return common;
    }
  };

  const reduce = (arrays, howToReduceFunc, accumulator) => {
    for (let i = 0; i < arrays.length; i++) {
      accumulator = howToReduceFunc(accumulator, arrays[i]);
    }
    return accumulator;
  };

  return reduce(arrays, howToReduce, buildingUp);
};

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);

// Expected output [5,15]

// Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array.
const union = (arrays) => {
  const unionFunction = (sumUp, unit) => {
    if (sumUp.length === 0) {
      return unit;
    } else {
      for (let k = 0; k < unit.length; k++) {
        if (!sumUp.includes(unit[k])) {
          sumUp.push(unit[k]);
        }
      }
      return sumUp;
    }
  };

  let buildUp = [];

  for (let i = 0; i < arrays.length; i++) {
    buildUp = unionFunction(buildUp, arrays[i]);
  }

  return buildUp;
};

console.log(
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);
// should log: [5, 10, 15, 88, 1, 7, 100]
