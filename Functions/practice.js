'use strict';

// Problem -> 1
const add = function (num1, num2) {
  return num1 + num2;
};

console.log('Sum :', add(3, 5));

// Problem -> 2
function operate(a, b, operation) {
  // Your code here
  return operation(a, b);
}

// Define addition and multiplication functions
function addition(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

// Call operate with different operations
console.log('Addition :', operate(5, 3, add)); // Output: 8
console.log('multiply :', operate(5, 5, multiply)); // Output: 15

// Problem -> 3
function createMultiplier(multiplier) {
  // Your code here
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log('Ans :', double(5)); // Output: 10

const triple = createMultiplier(3);
console.log('Ans :', triple(4)); // Output: 12

// Problem -> 4
const numbers = [1, 2, 3, 4, 5];

// Your code here
const squaredNumbers = numbers.map(function (num) {
  return num * num; 

});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
