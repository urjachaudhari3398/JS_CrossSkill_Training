/**
 *  Write a function that can stop execution of a function for the number of milliseconds sent as an argument
 */

const func = async () => {
  console.log("Printing before");
  await sleep(2000);
  console.log("Printing after");
};

const sleep = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

func();

/***************************************************************************************************************************/

/**
 * Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ).
 * Log the data into the console once it is received
 */

const apiCall = () => {
  return new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users")
      .then((resp) => {
        if (resp.ok) {
          resolve(resp.json());
        }
        reject("Error in executing API");
      })
      .then((users) => resolve(users));
  });
};

apiCall().then((response) => console.log(response));

/***************************************************************************************************************************/

/**
 * What will be printed to the console when the promise resolves and when it rejects?
 */

// if promise resolved, the argument in resolve() is sent as response.
// On testAsyncFunction().then(), "Response in then block: Test Resolve" will be printed

// if promise rejected, the control goes to nearest catch block
// So "Error caught in testAsyncFunction: Test Reject" will be printed
// Because we have not returned anything from catch block of Promise, on testAsyncFunction().then(), res will be undefined.
// So "Response in then block: undefined" will be printed

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction: ", err);
    // return err;
  });
};
testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

/***************************************************************************************************************************/

/**
 *  What will be printed to the console?
 */

// Promise is rejected with value "Test static reject", so control will go to nearest catch block.
// So "Error in catch block Test static reject" is printed
// As promise is never resolved, testAsyncFunction2().then() will not be executed

const testAsyncFunction2 = () => {
  return Promise.reject("Test static reject");
};

testAsyncFunction2()
  .then((res) => {
    console.log("Response in then block", res);
  })
  .catch((err) => console.log("Error in catch block", err));

/***************************************************************************************************************************/

/**
 * What will be printed to the console?
 */

// if promise resolved, the argument in resolve() is sent as response.
// On testAsyncFunction3().then(), "Response in then block: Test Resolve" will be printed

// if promise rejected, control goes to nearest catch block with arg as "Test Reject".
// in catch block "Error caught in testAsyncFunction Test Reject" will be printed and
// error will be thrown which moves control to next catch block with arg as Error: Forced error
// "Error in catch block: Error: Forced error" will be printed

const testAsyncFunction3 = () => {
  return new Promise((resolve, reject) => {
    if (0 > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  });
};
testAsyncFunction3()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

/***************************************************************************************************************************/

/**
 * Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.
 */

const apiCall2 = () => {
  return new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        reject("Error in executing API");
      })
      .then((users) => {
        setTimeout(() => {
          resolve(users);
        }, 2000);
      })
      .catch((error) => console.log(error));
  });
};

apiCall2()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

/***************************************************************************************************************************/

/**
 * Complete the above tasks with async/await.
 */

const asyncApiCall = async () => {
  try {
    const resp = await fetch("https://reqres.in/api/users");
    if (resp.ok) {
      const data = await resp.json();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return data;
    } else {
      throw "Error in executing API";
    }
  } catch (error) {
    throw error;
  }
};
const fetchData = async () => {
  try {
    const response = await asyncApiCall();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
