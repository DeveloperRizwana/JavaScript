'use strict';

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// Closures Practice
// example-1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(2 * a);
  };
};

const h = function () {
  const b = 12;
  f = function () {
    console.log(2 * b);
  };
};

g();
f();

// re-assigning function
h();
f();
console.dir(f);

// example-2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passenger`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
