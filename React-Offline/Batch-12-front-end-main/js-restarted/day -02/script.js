const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

// spread operator
const arr3 = [...arr1, 10, 11];

const person = {
  firstName: "salman",
};

const p2 = { ...person, lastName: "shaikh" };

console.log(p2);

console.log(arr3);
