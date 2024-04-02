# JS_CrossSkill_Training

# Assignment 1

[assignment01.js](assignments/assignment01.js)

1.  Create a simple HTML file in notepad (do not use VSCode). To this, add some javascript by

    - Writing javascript between script tags
    - Writing javascript in a file and passing that as a src in the script tag

2.  Where to attach the script tag:

        ```
        <html>
            <head></head>
            <body>
                <h1 id="test">Hello World!</h1>
            </body>
        </html>
        ```

    - Given the above html, find out what happens when you try to access the element h1 in javascript (using document.getElementById) and change its content to “Goodbye World” when the script is attached:
      - in the head tag
      - at the start of the body tag
      - at the end of the body tag

# Assignment 2

[assignment02.js](assignments/assignment02.js)

1. Declare a variable - let a;. On another line assign any value you like to a. Log the value of a before and after assignment. Try doing the same with const.

2. Use the typeof operator to find the types of different variables. Specially note what the typeof operator returns for arrays, null values and NaN. How can you find if a variable is an array or NaN besides typeof?

3. Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. What do you expect to happen in both cases? What actually happens in both cases. What is the difference between an object declared as a let or a const variable?

# Assignment 3

[assignment03.js](assignments/assignment03.js)

1. Declare a variable let age = 25;. Write a series of if else statements that will:
   - Print child to the console if age is less than equal to 12.
   - Print teen to the console if age is between 13 and 18 (inclusive).
   - Print adult to the console if age is above 18
2. Do the same using switch case.
3. Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
4. Accomplish the same using a while loop.
5. Can you use return instead of break in loops?

# Assignment 4

[assignment04.js](assignments/assignment04.js)

1. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? Can you return from inside an if block? What impact does that have?

2. Take a function that accepts a function as a parameter (also known as callback function).

   ```
   function test(callback){
       callback();
    }
    function callbackFunc(){
        console.log(“Calling the callback function”)
        return 5;
    }
   ```

   - Explore the following cases - what is printed in the console, and what gets returned:

   ```
   test(callbackFunc)

   test(callbackFunc())

   test(() => callbackFunc())
   ```

   - What happens when you return callback() from the test function?

   - What happens when you return callback from the test function?

# Assignment 5

[assignment05.js](assignments/assignment05.js)

1. What is the difference between ++i and i++?

2. What do you think would happen if you pass an index beyond the range of the string? Or if you pass a negative index? Try it out.

3. Do you think JSON.stringify would work for arrays as well? What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify?

4. What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?

# Assignment 6

[assignment06.js](assignments/assignment06.js)

```
[{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09"
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05"
}, {
"id": 3,
"first_name": "Demetris",
"email": "dkilshall2@elpais.com",
"date_of_birth": "2018/12/31"
}, {
"id": 4,
"first_name": "Amata",
"email": "abraiden3@canalblog.com",
"date_of_birth": "2012/05/23"
}, {
"id": 5,
"first_name": "Venita",
"email": "vheap4@clickbank.net",
"date_of_birth": "2020/10/04"
}, {
"id": 6,
"first_name": "Fairfax",
"email": "fcrichton5@merriam-webster.com",
"date_of_birth": "2009/12/23"
}, {
"id": 7,
"first_name": "Kathleen",
"email": "kvasyukhnov6@devhub.com",
"date_of_birth": "2010/12/20"
}, {
"id": 8,
"first_name": "Sam",
"email": "scorck7@sitemeter.com",
"date_of_birth": "2020/08/30"
}, {
"id": 9,
"first_name": "Virgilio",
"email": "vferandez8@e-recht24.de",
"date_of_birth": "2000/09/07"
}, {
"id": 10,
"first_name": "Townie",
"email": "tpetyt9@upenn.edu",
"date_of_birth": "2018/09/01"
}]
```

1. Take the above array of objects. Accomplish the following tasks:

   - Write a function filterByName that accepts a string as a parameter and returns an array with only those objects where the first_name field includes that string.
   - Use Array.map to return an array of all the email fields.
   - Use Array.sort to return the array sorted in descending order by date_of_birth.
   - Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number.

2. What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating. How can you verify this?:
   - push
   - pop
   - filter
   - find
   - sort
   - map

# Assignment 7a

[assignment07a.js](assignments/assignment07a.js)

1. How will you create a new copy of the object below while updating the value of address.details[0] to “5“?

   ```
   {
   name:”Harry Potter”,
   age: 12,
   address: {
       details: [“4”, “Privet Drive”],
       area:”Little Whinging”,
       city: “Surrey”,
       state: “England”
       }
   }
   ```

2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example:

   ```
   let obj = {
        a:”Apple”,
        b:[“Basketball”,”Baseball”],
        c: {
            call: “cellphone”
        },
        d: “Dog”
   }
   filterObject(obj) //This should return {a:”Apple”, d:”Dog”}
   ```

# Assignment 7b

[assignment07b.js](assignments/assignment07b.js)

1.  Write a function mapBy to convert an array of objects into an object mapped by the specified key:
    Example:

    ```
    let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
    }];

    mapBy(users, “first_name”);

        //This should return
        //{
        // “Nicki”:{id:1, first_name:”Nicki”, ...},
        // “Raychel”:{id:2, first_name:”Raychell”, ...},
        //}
    ```

2.  Write a function groupBy to convert an array of objects into groups based on the specified key:

    ```
    let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    “gender”:”Male”,
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05",
    “gender”:”Female”
    }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31",
    “gender”:”Male”
    }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23",
    “gender”:”Female”
    }];
    groupBy(users, “gender”)
    //This should return
    //{
    //“Male”:[
    // {id:1, first_name:”Nicki”, ...},
    // {id:3, first_name:”Demetris”, ...}
    //]
    //“Female”:[
    // {id: 2, first_name:”Raychel”, ...},
    // {id: 4, first_name:”Amata”, ...}
    //]
    //}
    ```

3.  Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment. Example:
    ```
    let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    “gender”:”Male”,
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05",
    “gender”:”Female”
    }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31",
    “gender”:”Male”
    }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23",
    “gender”:”Female”
    }]
    sort(users, “id”, “desc”) //Should return users sorted by id in descending order
    sort(users, “first_name “desc”) //Should return users sorted by first_name in ascending order
    ```
4.  Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).Example:

    ```
    let userNames = [{
    "id": 1,
    "first_name": "Nicki",
    }, {
    "id": 2,
    "first_name": "Raychel",
    }, {
    "id": 3,
    "first_name": "Demetris",
    }, {
    "id": 4,
    "first_name": "Amata",
    }]
    let userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
    }, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
    }, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
    }, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
    }]

    mergeById(userNames, userEmails)
    //This should return an array of users in the format:
    [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    }]
    ```

5.  Write a function to filter an array of strings to hold only unique values

# Assignment 8

[assignment08.js](assignments/assignment08.js)

1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument. Example:
   ```
   const func = async () => {
   console.log(“Printing before”)
   //Call your function here eg. sleep(3000)
   console.log(“Printing after”)
   }
   ```
2. Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received.
3. What will be printed to the console when the promise resolves and when it rejects?
   ```
    const testAsyncFunction = () =>{
    return new Promise((resolve, reject) =>{
    if (Math.random() > 0.5) {
    resolve('Test Resolve');
    } else {
    reject('Test Reject');
    }
    }).catch((err) =>{
    console.log('Error caught in testAsyncFunction: ', err);
    });
    };
    testAsyncFunction()
    .then((res) =>{
    console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));
   ```
4. What will be printed to the console?

   ```
    const testAsyncFunction = () =>{
    return Promise.reject('Test static reject');
    };
    testAsyncFunction()
    .then((res) =>{
    console.log('Response in then block', res);
    })
    .catch((err) => console.log('Error in catch block', err));
   ```

5. What will be printed to the console?

   ```
   const testAsyncFunction = () =>{
   return new Promise((resolve, reject) =>{
   if (Math.random() > 0.5) {
   resolve('Test Resolve');
   } else {
   reject('Test Reject');
   }
   }).catch((err) =>{
   console.log('Error caught in testAsyncFunction', err);
   throw new Error('Forced error');
   });
   };
   testAsyncFunction()
   .then((res) =>{
   console.log('Response in then block: ', res);
   })
   .catch((err) => console.log('Error in catch block: ', err));
   ```

6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

7. Complete the above tasks with async/await.

# Assignment 9

[assignment09.js](assignments/assignment09.js)

1. Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript
2. Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x
3. Create a form to submit a blog to a mock API (reqres.in)
4. Create a blog list page that fetches a list of users from a mock API and adds them to a table on the page after loading. Add a button to sort the users by name. Add an input to filter the table by search. (Optional: Show “Loading…” or a loading spinner on the screen till the data loads)
