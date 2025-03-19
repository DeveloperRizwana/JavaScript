'use strict';

//Method borrowing
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

// Bind Mthod
// book.call(eurowings, 23, 'Sara');
const bookEW = book.bind(eurowings);
bookEW(23, 'Sara Khan');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Rizwana Perween');
bookEW23('Razia');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// const addVat = value => value + value * 0.23;
console.log(addVat(100));
console.log(addVat(34));

/// practice
const addTax2 = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVat2 = addTax2(0.23);
console.log(addVat2(100));
console.log(addVat2(34));
