'use strict';

const runOnce = function () {
  console.log('This will run again');
};
runOnce();

// Immediately Invoked Function Expressions(IIFE)
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})(); // Calling function
// console.log(isPrivate);

(() => console.log('This will "also" never run again'))();

{
  const isPrivate = 87;
  var notPrivate = 23;
}
// console.log(isPrivate);
console.log(notPrivate);
