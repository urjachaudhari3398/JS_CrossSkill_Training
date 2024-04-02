/**
 * Write a function mapBy to convert an array of objects into an object mapped by the specified key
 */

let users = [
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
];
const mapBy = (list, key) => {
  const updatedMapping = {};
  list.forEach((obj) => {
    updatedMapping[obj[key]] = obj;
  });
  return updatedMapping;
};

mapBy(users, "first_name");

/***************************************************************************************************************************/

/**
 * Write a function groupBy to convert an array of objects into groups based on the specified key
 */

users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

const groupBy = (list, key) => {
  let groupedValues = {};
  let keys = [...new Set(list.map((obj) => obj[key]))];
  keys.forEach((_key) => {
    groupedValues[_key] = list.filter((obj) => obj[key] === _key);
  });
  return groupedValues;
};
groupBy(users, "gender");

/***************************************************************************************************************************/

/**
 *  Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argument
 */

users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

const sort = (list, key, order) => {
  if (typeof list[0][key] === "number") {
    return list.sort((a, b) =>
      order === "asc" ? a[key] - b[key] : b[key] - a[key]
    );
  } else if (typeof list[0][key] === "string") {
    return list.sort((a, b) => {
      let x = a[key].toLowerCase();
      let y = b[key].toLowerCase();
      return order === "asc" ? x.localeCompare(y) : y.localeCompare(x);
    });
  }
};

console.log(sort(users, "id", "desc"));
console.log(sort(users, "first_name", "asc"));

/***************************************************************************************************************************/

/**
 * Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged.
 * Try to achieve it with a complexity - O(n).
 */

let userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
];
let userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
  {
    id: 3,
    email: "dkilshall2@elpais.com",
  },
];

const mergeById = (arr1, arr2) => {
  const lookup = {};
  arr2.forEach((obj) => {
    lookup[obj.id] = obj;
  });

  return arr1.map((obj) => ({
    ...obj,
    ...(lookup[obj.id] && { email: lookup[obj.id].email }),
  }));
};

console.log(mergeById(userNames, userEmails));

/***************************************************************************************************************************/

/**
 * Write a function to filter an array of strings to hold only unique values
 */

let strArray = ["a", "b", "c", "c", "a", "a", "e", "f"];
const uniqueValues = [...new Set(strArray)];
