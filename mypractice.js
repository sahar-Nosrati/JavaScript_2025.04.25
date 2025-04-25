"use strict";

// const errorTest = function () {
//   const fruits = ["pineapple", "fig", "cherry", "grap"];

//   for (let element of fruits) {
//     try {
//       console.log(element);
//       if (element.includes("g")) {
//         throw new customError("It contains 'g'");
//       }
//       console.log(`Nice fruit${element}`);
//     } catch (error) {
//       console.error(error.message);
//       console.error(error.name);
//       console.error(error.stack);
//     } finally {
//       console.log("...finally😁🦆");
//     }
//   }
// };

// errorTest();

// function customError(message) {
//   this.name = "Custom Error";
//   this.message = message;
//   this.stack = `${this.name} : ${this.message}`;
// }

// Try-catch

// try {
//   const testedNumber = prompt("Please enter a number");
//   const convertedNumber = +testedNumber;

//   const confirmedMessage = `The input is equal ${convertedNumber}, correct😊😊`;

//   if (convertedNumber) {
//     console.log(confirmedMessage);
//   } else {
//     throw new customError("The input is not correct, please enter new one");
//   }
// } catch (error) {
//   console.warn(error.name);
//   console.warn(error.message);
//   console.warn(error.stack);
// } finally {
//   const findSolutionMessage = `Finally, I have found solution 😊😁😀`;
//   console.log(findSolutionMessage);
// }




// function customError(message) {
//   this.name = "Custom Error";
//   this.message = message;
//   this.stack = `${this.name}: ${this.message}`;
// }




// scop in js

// const fistName = "Sahar";
// function fullName (tName){
//   var lastName = "jjj";
//   if (fistName == "Sahar"){
//     var fullName1 = `${fistName} ${lastName}`;
//     console.log(fullName);
//     console.log(lastName); 
//   }
// }

// console.log(fullName("Mahtab")); 
// console.log(fullName1); 
// console.log(lastName); 


let car; 

console.log(car);
