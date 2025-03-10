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

// Function
const correctPassenger = function (name) {
  const lower = name.toLowerCase();
  const correct = lower[0].toUpperCase() + lower.slice(1);
  console.log(correct);
};
correctPassenger('sAlMaN');

// comparing emails
const email = 'hello@rizu.io';
const logInEmail = '   Hello@Rizu.io \n';

// const lowerEmail = logInEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // trim Method
// console.log(trimmedEmail);

const normalizedEmail = logInEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing - replace mehtod
const priceIndia = '288,97₹';
const priceUS = priceIndia.replace('₹', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All the passenger come to boarding door 23. Boarding door 23.';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A32'));
console.log(plane2.startsWith('B32'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Air') && plane2.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Practice Exercise
const checkBaggage = function (itmes) {
  const baggage = itmes.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome Abroad!!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// split and join method
console.log('a+very+nice+string'.split('+'));
console.log('Rizwana Perween'.split(' '));

const [firstName, lastName] = 'Rizwana Perween'.split(' ');
console.log(firstName, lastName);

const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// practice
const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizedName('rizwana perween');
capitalizedName('nusrat jahan');
capitalizedName('sayyed jasmine jameel');

// Padding
const message = 'Go to gate 23!!';
console.log(message.padStart(25, '_').padEnd(35, '_'));
console.log('Rizwana'.padStart(25, '🥰 ').padEnd(35, ' 🥰'));

// real Example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(73457676576));
console.log(maskCreditCard(676576));
console.log(maskCreditCard('7345767657642341'));

// Repeat
const message2 = 'Bad weather....All Departues Dlayed...';
console.log((message2 + '\n').repeat(5));

// function
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(4);
planesInLine(8);
