/** Declare a variable - let a;
 * On another line assign any value you like to a. Log the value of a before and after assignment. Try doing the same with const.
 */
let a;

// accessing let variable before assignment
console.log(a); // undefined

a = 10;

// accessing let variable after assignment
console.log(a); // 10

const b = 10; // const needs assignment at time of declaration

console.log(b); // 10

// b = 15; // const cannot be reassigned

/***************************************************************************************************************************/

/**
 * Use the typeof operator to find the types of different variables.
 * Specially note what the typeof operator returns for arrays, null values and NaN. How can you find if a variable is an array or NaN besides typeof?
 */
let x;
const sampleArray = [
  1,
  "1",
  [1, 2, 3, 4],
  new Array(1, 2, 3, 4),
  { empId: 634, name: "Urja" },
  x,
];

sampleArray.forEach((type) => console.log(typeof type));

console.log(parseInt("hello"), 0 / 0);

/***************************************************************************************************************************/

/**
 * Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object.
 * What do you expect to happen in both cases?
 * What actually happens in both cases. What is the difference between an object declared as a let or a const variable?
 */

let mutableArray = [1, 2, 3];
const immutableArray = [4, 5, 6];

mutableArray[2] = 4;
mutableArray.shift();
delete mutableArray[1];

immutableArray[2] = 7;
immutableArray.pop();
immutableArray.push(6);

// To make array immutable, we can use Object.freeze
const immutableArray2 = Object.freeze([1, 2, 3]);

// below gives error
// immutableArray2[2] = 7;
// immutableArray2.pop();
// immutableArray2.push(6);

let mutableObject = { a: 1, b: 2, c: 3 };
const immutableObject = { x: 4, y: 5, z: 6 };

mutableObject.a = 0;
mutableObject = {
  ...mutableObject,
  a: 4,
};

immutableObject.x = 0;
// below gives error as const cannot be reassigned
// immutableObject = {
//   ...immutableObject,
//   a: 2,
// };

console.log(mutableObject, immutableObject);
