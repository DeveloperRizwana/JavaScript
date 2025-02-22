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

  orderPAsta: function (ingr1, ingr2, ingr3) {
    console.log(
      `Here is your delicious pasta with ${ingr1}, ${ingr2}, ${ingr3}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2], arr[8]];
console.log(badNewArr);

//Spread Operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMain = [...restaurant.mainMenu, 'Paneer Chilli'];
console.log(newMain);

// Copy Array
const newMainCopy = [...restaurant.mainMenu];
console.log(newMainCopy);

// Join 2 Array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: Strings, Arrays, maps, sets. NOT Objects
const str = 'Rizwana';
const letters = [...str, ' ', 'P'];
console.log(letters);
console.log(...str);

// console.log(`${...str} Perween`);

// Real World Example
const ingredients = [
  prompt("let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPAsta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPAsta(...ingredients);

// Objects
const newRestaurant = { FoundedIn: 1990, ...restaurant, founder: 'Nusrat' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Biryani Mahal';
console.log(restaurantCopy.name);
console.log(restaurant.name);