'use strict';

const restaurant = {
  name: 'Spice Delight',
  location: 'Connaught Place, New Delhi, India',
  categories: ['Vegetarian', 'Non-Vegetarian', 'Street-Food'],
  starterMenu: ['Samosa', 'Paneer Tikka', 'Chicken Pakora', 'Dahi Puri'],
  mainMenu: [
    'Butter Chicken',
    'Dal Makhani',
    'Paneer Butter Masala',
    'Biryani',
    'Butter Naan',
  ],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  orderDeleivery: function ({ starterIdx, mainIdx, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIdx]} and  ${this.mainMenu[mainIdx]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const airLine = 'TAP Air India';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('A320'[0]);

console.log(airLine.length);
console.log('B370'.length);

// Methods- indexOF or lastIndexOf
console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('i'));
console.log(airLine.lastIndexOf('India')); // 8
console.log(airLine.lastIndexOf('india')); // -1

//slice
console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E')
    console.log(`You got the middle seat 😆 
`);
  else
    console.log(`You got lucky 😎 
`);
};

checkMiddleSeat('11B');
checkMiddleSeat('12A');
checkMiddleSeat('1E');

console.log(new String('Rizwana'));
console.log(typeof new String('Rizwana'));
console.log(typeof new String('Rizwana').slice(1));

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Fix capatalization in name
const passenger = 'riZwaNa';
const lower = passenger.toLowerCase();
const correct = lower[0].toUpperCase() + lower.slice(1);
console.log(correct);

const correctPassenger = function (name) {
  const lower = name.toLowerCase();
  const correct = lower[0].toUpperCase() + lower.slice(1);
  console.log(correct);
};

correctPassenger('sAlMaN');
