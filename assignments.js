"use strict";

//#region Functions
/*
function describeCountry(country, population, capitalCity) {
  const text = `${country} has ${population} people and its capital city is ${capitalCity}`;
  return text;
}

const denmark = describeCountry("Denmark", 5900000, "Copenhagen");
console.log(denmark);

const sweden = describeCountry("Sweden", 10400000, "Stockholm");
console.log(sweden);

const norway = describeCountry("Norway", 5400000, "Oslo");
console.log(norway);
*/
//#endregion

//#region Function Declarations vs. Expressions
/*
// Function Declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percDenmark1 = percentageOfWorld1(6);
const percUSA1 = percentageOfWorld1(331);
const percSweden1 = percentageOfWorld1(5);

const percDenmark2 = percentageOfWorld2(6);
const percUSA2 = percentageOfWorld2(331);
const percSweden2 = percentageOfWorld2(5);

console.log(percDenmark1, percUSA1, percSweden1, percDenmark2, percUSA2, percSweden2);
*/
//#endregion

//#region Arrow Functions
/*
// Arrow function
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percDenmark3 = percentageOfWorld3(6);
const percUSA3 = percentageOfWorld3(331);
const percSweden3 = percentageOfWorld3(5);
console.log(percDenmark3, percUSA3, percSweden3);
*/
//#endregion
