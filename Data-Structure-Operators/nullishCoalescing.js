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

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or " ")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// Practice-1
let user = { name: 'Alice', age: 0 };
console.log(user.name ?? 'Unknown'); // "Alice"
console.log(user.age ?? 18); // 0 (because 0 is not null/undefined)
console.log(user.city ?? 'Not Provided'); // "Not Provided"

//Practice-2
function greet(name) {
    // return "Hello, " + (name ?? "stranger") + "!";
    return `Hello  ${name ?? "stranger"} !`;
}

console.log(greet("Rizu"));  // "Hello, John!"
console.log(greet(null));    // "Hello, stranger!"
console.log(greet(undefined)); // "Hello, stranger!"
console.log(greet(""));      // "Hello, !" (empty string is kept)
