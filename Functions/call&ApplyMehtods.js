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
lufthansa.book(234, 'Rizwana Perween');
lufthansa.book(534, 'Razia Perween');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Call Method --> .call() sets this explicitly to the specified object.
book.call(eurowings, 23, 'Rabia Perween');
console.log(eurowings);

book.call(lufthansa, 76, 'Rizzu');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 767, 'Choti');

// Apply method
const flightData = [234, 'Aahil'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Practice
const person = {
  name: 'Rizwana',
  greet(age, city) {
    console.log(
      `Hello I am ${this.name} and i am ${age} years old. and I am from ${city}..`
    );
  },
};
person.greet(23, 'Patna (Bihar)');
console.log(person);

const greet = person.greet;
const data = [23, 'Saharsa,(Patna,Bihar,India)'];
greet.apply(person, data);
greet.call(person, ...data);

// 2
const person2 = { name: 'Rizzu' };
greet.call(person2, 20, 'Bihar');
