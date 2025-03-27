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
