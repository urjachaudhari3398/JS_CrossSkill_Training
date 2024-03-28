let age = 25;

/***************************************************************************************************************************/

/**
 * If else
 */

if (age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 18) {
  console.log("Teen");
} else if (age > 18) {
  console.log("Adult");
}

/***************************************************************************************************************************/

/**
 * switch
 */

switch (true) {
  case age <= 12:
    console.log("Child");
    break;
  case age >= 13 && age <= 18:
    console.log("Teen");
    break;
  case age > 18:
    console.log("Adult");
    break;
  default:
    console.log("Default");
}

/**
 * 3. Declare a variable let arraySize = 25;
 * Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
 */

let arraySize = 25;
let res = [];

for (let i = 1; i <= 25; i++) {
  res.push(i);
}

console.log(res);

/***************************************************************************************************************************/

/**
 * 3. Declare a variable let arraySize = 25;
 * Using a while loop, add numbers from one onwards into an array till the arraySize is reached.
 */

res = [];
let index = 1;
while (index <= 25) {
  res.push(index);
  index++;
}

console.log(res);

/***************************************************************************************************************************/

/**
 * Can you use return instead of break in loops?
 */

// on return,
// 1. We can return value to the caller
// 2. all the subsequent line of code in the function are skipped and pointer moves to immediate statement of the function call
function testReturn() {
  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      return "Value Returned";
    }
    console.log("index", i);
  }
  console.log("last line of testReturn executed");
}

// after value is returned from testReturn, the value will be stored in testReturnRes and pointer will be moved to testBreak()
const testReturnRes = testReturn();

// on break,
// 1. Value cannot be returned
// 2. pointer is set to next statement after the loop and all the subsequent line of code in the function will be executed
function testBreak() {
  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      break;
    }
    console.log("index", i);
  }
  console.log("last line of testReturn executed");
}

testBreak();
