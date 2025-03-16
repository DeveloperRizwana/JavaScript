'use strict';

const flight = 'LH234';
const rizwana = {
  name: 'Rizwana Perween',
  passport: 3984897667,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Ms.' + passenger.name;

  if (passenger.passport === 3984897667) {
    alert('Checked in!');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, rizwana);
console.log(flight);
console.log(rizwana);

// is the same as doing.....
const flightNum = flight;
const passenger = rizwana;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(rizwana);
checkIn(flight, rizwana);
