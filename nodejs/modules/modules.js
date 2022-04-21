// // export an array
// export let months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// // export a constant
// export const MODULES_BECAME_STANDARD_YEAR = 2015;

// // export a class
// export class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

export function sayHi(user) {
  alert(`Hello, ${user}!`);
} // no ; at the end

// function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

// function sayBye(user) {
//   alert(`Bye, ${user}!`);
// }

// export {sayHi, sayBye}; // a list of exported variables

// export function sayHi() { ... }
// export function sayBye() { ... }
// export function becomeSilent() { ... }

// export {sayHi as hi, sayBye as bye};

// export default class User { // just add "default"
//     constructor(name) {
//       this.name = name;
//     }
//   }
