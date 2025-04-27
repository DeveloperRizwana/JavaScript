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

console.log('----- OR(||) -----');
// Use ANY data type, return ANY data type, short- circuiting
console.log(3 || 'Rizu');
console.log('' || 'Rizu');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || null || 0 || '' || 'Rizu' || 2);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND(&&) -----');
console.log(0 && 'Rizu');
console.log(3 && 'Rizu');
console.log(3 && 'Rizu' && null && 'Hello');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mashroom', 'spinach', 'onion');
}

// we can use "&&" operators like this
restaurant.orderPizza && restaurant.orderPizza('Mashroom', 'spinach');

// Practice-1st
console.log(3 && 'Rizu'); // last value
console.log(0 && 'Rizu'); // first value - short circuits
console.log(0 || 'js'); // last value
console.log(null && 'Ignored'); // first value - short circuits
console.log(undefined || 100); // last value
console.log('' && 'Text'); // first value - short circuits
console.log('Code' || false); // first value - short circuits
console.log((false && 'Skipped') || 'Executed');

// Practice with function
// Practice-2nd
function getUserName(name) {
  return name || 'guest';
}
    
console.log(getUserName('Rizu'));
console.log(getUserName(''));
console.log(getUserName(0));
console.log(getUserName(null));

// Practice-3rd
function isAdult(age) {
  age >= 18 && console.log('Access Granted');
}

isAdult(25);
isAdult(16);

// Practice-3rd
console.log(0 || (2 && 3) || 4);
console.log((1 && null) || 4);
console.log(' ' || ('Hello' && 'world'));

// Practice-4th
function logMessage() {
  console.log('Logging in....');
}

let isLoggedIn = true;
isLoggedIn && logMessage();

isLoggedIn = false;
isLoggedIn && logMessage();

// Practice-4th
function showDashboard() {
    console.log("Welcome to your dashboard!");
}

function showLoginScreen() {
    console.log("Please log in to continue.");
}

let isUserLoggedIn = true;

// Your code here (Use && and ||)
isUserLoggedIn && showDashboard();

isUserLoggedIn = false;
// Your code here (Use && and ||)
isUserLoggedIn || showLoginScreen();


