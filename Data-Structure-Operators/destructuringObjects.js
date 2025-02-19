'use strict';

// Destructuring Objects
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
};

restaurant.orderDeleivery({
  time: '10:30',
  address: 'Patna',
  mainIdx: 2,
  starterIdx: 2,
});

const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Setting default value
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutatig value
let a = 111;
let b = 999;

const obj = { a: 21, b: 12, c: 56 };

// let { a, b } = obj; // we can't do this
({ a, b } = obj);

console.log(obj);
console.log(a, b);

// nested onjects
// const {fri} = openingHours;
// console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
