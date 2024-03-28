/**
 * What is the difference between ++i and i++?
 */
let i = 0;
// the value is incremented and then returned
let preInc = ++i; // 1
console.log(preInc);

// the value is returned and then incremented
let postInc = i++; // 1
console.log(postInc);

console.log(i); // 2

/***************************************************************************************************************************/

/**
 * What do you think would happen if you pass an index beyond the range of the string? Or if you pass a negative index? Try it out.
 */

const test = "Four";

console.log("Index beyond range", test[5]); // undefined
console.log("Negative Index", test[-1]); // undefined

/***************************************************************************************************************************/

/**
 * Do you think JSON.stringify would work for arrays as well?
 * What about nested objects?
 * What happens if we pass numbers, strings, undefined, null to JSON.stringify?
 */

// Everything except undefined will be converted to string.
// JSON.stringify(undefined) gives undefined

const allTypes = [
  [1, 2, 3, 4],
  {
    id: 634,
    name: {
      first: "Urja",
      last: "Chaudhari",
    },
    city: "Pune",
  },
  1,
  "Strings",
  undefined,
  null,
];

allTypes.forEach((val) =>
  console.log(
    "Value: ",
    JSON.stringify(val),
    " | Type: ",
    typeof JSON.stringify(val)
  )
);

/***************************************************************************************************************************/

/**
 * What happens if you pass a regular/invalid JSON string to JSON.parse?
 * What will happen if such an invalid function runs in the program?
 * Will other parts of the code execute correctly after that?
 */

const invalidJSONString = '{"name": "John", age: 30}';

function checkParsedJson(json) {
  console.log(json);
}

const parsedJson = JSON.parse(invalidJSONString); // gives error

checkParsedJson(parsedJson); // this will not be executed as JSON.parse gave error

console.log(1 + 2); // after error in parsing JSON, next line will not be executed
