'use strict';

console.log(this);

// Simple fucntion call
const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this); // undefined
};

calcAge(2003);

// Arrow functions don't have their own "this" keyword
const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this); // lexical this -> in parents scope - window
};

calcAgeArrow(2004);

const rizu = {
  year: 2003,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};
rizu.calcAge();

const razia = {
  year: 2007,
};

razia.calcAge = rizu.calcAge;
razia.calcAge();

const f = rizu.calcAge;
f(); // undefined
