const data = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
  },
  {
    id: 5,
    first_name: "Venita",
    email: "vheap4@clickbank.net",
    date_of_birth: "2020/10/04",
  },
  {
    id: 6,
    first_name: "Fairfax",
    email: "fcrichton5@merriam-webster.com",
    date_of_birth: "2009/12/23",
  },
  {
    id: 7,
    first_name: "Kathleen",
    email: "kvasyukhnov6@devhub.com",
    date_of_birth: "2010/12/20",
  },
  {
    id: 8,
    first_name: "Sam",
    email: "scorck7@sitemeter.com",
    date_of_birth: "2020/08/30",
  },
  {
    id: 9,
    first_name: "Virgilio",
    email: "vferandez8@e-recht24.de",
    date_of_birth: "2000/09/07",
  },
  {
    id: 10,
    first_name: "Townie",
    email: "tpetyt9@upenn.edu",
    date_of_birth: "2018/09/01",
  },
];

/***************************************************************************************************************************/

/**
 * Write a function filterByName that accepts a string as a parameter
 * and returns an array with only those objects where the first_name field includes that string.
 */

const filterByName = (name) => {
  return data.filter((obj, index) => obj.first_name === name);
};

console.log(filterByName("Townie")); // array with objects where first_name is "Townie"
console.log(filterByName("Urja")); // [] as there is no object with first_name "Urja"

/***************************************************************************************************************************/

/**
 * Use Array.map to return an array of all the email fields.
 */

const emails = data.map((obj, index) => obj.email);
console.log(emails);

/***************************************************************************************************************************/

/**
 * Use Array.sort to return the array sorted in descending order by date_of_birth.
 */

const sortedData = data.sort((a, b) => {
  return new Date(b.date_of_birth) - new Date(a.date_of_birth);
});
console.log(sortedData);

/***************************************************************************************************************************/

/**
 * Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number.
 */

const getById = (id) => {
  return data.find((obj) => obj.id === id);
};

console.log(getById(6));

/***************************************************************************************************************************/

/**
 * What makes a method mutating or non mutating in Javascript?
 */

// mutating: If the method changes the original data
// non mutating: If method returns new data without modifying the original data

/***************************************************************************************************************************/

/**
 * Find out whether each of the following methods are mutating or non-mutating.
 * How can you verify this?:
 */

const arr = [1, 2, 3, 4, 5];

arr.push(6); // returns pushed element
console.log(arr); // mutating

arr.pop(); // returns popped element
console.log(arr); // mutating

arr.filter((val) => val === 2); // returns new data as array
console.log(arr); // non mutating

arr.find((num) => num === 2); // return value from array if expression in callback is true
console.log(arr); // non mutating

arr.sort((a, b) => b - a); // manipulates the sequence of values in original array
console.log(arr); // mutating

arr.map((val) => val + 1); // returns new array, without changing original array
console.log(arr); // non mutating
