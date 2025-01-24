import { userName } from "./main.js";

console.log(userName);

const person = {
  firstName: "Deepak",
  lastName: "Kalal",
  city: "Mumbai",
};

// object destructuring
let { city, firstName, lastName } = person;

// this won't change the city value in original object
city = "Pune";

// console.log(firstName, lastName, city);

// console.log(person);

// Array destructuring

const arr = ["Punit", "Superstart", "Bhau"];

// order is imp
const [fName, middleName, lName] = arr;

// console.log(lName);
