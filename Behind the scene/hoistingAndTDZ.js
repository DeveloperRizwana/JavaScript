'use strict';

//variables
console.log(me);
// console.log(profession); // ReferenceError -> can't access
// console.log(year); // ReferenceError -> can't access

var me = 'Rizwana';
let profession = 'Student';
const year = 2003;

//Functions
console.log(addDecl(2,4));
// console.log(addExpr(2,4)); // ReferenceError
// console.log(addArrow(2,4));// ReferenceError -> can't access

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b; 

// Example

console.log(numProducts);
if(!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart(){
    console.log("All products deleted!")
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

