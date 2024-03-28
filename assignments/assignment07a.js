/**
 * How will you create a new copy of the object below while updating the value of address.details[0] to "5"?
 */

let copy = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

copy.address.details[0] = 5;

/***************************************************************************************************************************/

/**
 * Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries
 */

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

const filterObjectWithEntries = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key, val]) => typeof val !== "object" && !Array.isArray(val)
    )
  );
};

const filterObjectWithKeys = (obj) => {
  let filteredObj = {};
  Object.keys(obj)
    .filter((key) => typeof obj[key] !== "object" && !Array.isArray(obj[key]))
    .forEach((key) => (filteredObj[key] = obj[key]));

  return filteredObj;
};

filterObjectWithKeys(obj);
filterObjectWithEntries(obj);
