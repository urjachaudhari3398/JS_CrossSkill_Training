/**
 * What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break?
 * 1. Do statements after the loop run?
 * 2. What is the return value?
 * 3. Can we pass a return value from within a loop?
 * 4. Can you return from inside an if block?
 * 5. What impact does that have?
 */

// on return,
// 1. no. pointer moves to next statement where the function is called
// 2. We can add return value of any type
// 3. Yes. We have returned string from inside the loop.
// 4. Yes. We have returned string from inside if block
// 5. all the subsequent line of code in the function are skipped and pointer moves to immediate statement of the function call
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
// 1. Yes. Subsequent statements after the loop are executed
// 2. There is no return value
// 5. pointer is set to next statement after the loop and all the subsequent line of code in the function will be executed
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

/***************************************************************************************************************************/

// Take a function that accepts a function as a parameter (also known as callback function).

function test(callback) {
  //   callback();
  //   return callback();
  return callback;
  // callback.call();
}

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

/***************************************************************************************************************************/

// Explore the following cases - what is printed in the console, and what gets returned:

// reference of callbackFunc is passed as argument to test
// the function execution starts only when the function in argument is called
// sequence of execution: test(callbackFunc) -> callbackFunc() -> console.log() -> return 5

let sample = test(callbackFunc);
console.log(sample); // 5

/***************************************************************************************************************************/

// callbackFunc is called and its return value will be passed to test as argument
// as callbackFunc doesn't return function, it gives error while calling argument of test()
// sequence of execution: callbackFunc() -> console.log() -> return 5 -> test(5) -> error: callback is not a function

sample = test(callbackFunc());
console.log(sample);

/***************************************************************************************************************************/

// the argument here is arrow function which has callbackFunc() called in its definition
// anonymous function is passed as argument to test()
// sequence of execution: test(anonymous function) -> anonymous function ->  callbackFunc() -> console.log() -> return 5

sample = test(() => callbackFunc());
console.log(sample);

/***************************************************************************************************************************/

/**
 * What happens when you return callback() from the test function?
 */

// Value returned from callbackFunc is returned to test
// and the same value is again returned from test to be stored in sample

/***************************************************************************************************************************/

/**
 * What happens when you return callback from the test function?
 */

// For test(callbackFunc);
// the function in arg will not be executed but will be returned as normal function

// For test(callbackFunc())
// after executing callbackFunc() -> console.log("Calling the callback function") -> return 5 -> test(5) will be executed,
// number 5 will be returned

// For test(() => callbackFunc())
// the function in arg will not be executed but will be returned as arrow function
