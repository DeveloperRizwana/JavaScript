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

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },
};

const arr = [6, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories; // first & Second Elelment
const [first, , second] = restaurant.categories; // first & Third Elelment
console.log(first, second);

// If the owner of the restaurent wanted to change main to secndary & secondary to main(first & Third Elelment)
let [main, , secondary] = restaurant.categories;

// switching/swapping variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('Swapping......');
// console.log(main, secondary);

// Destructuring VALUES
[main, , secondary] = [secondary, , main];
console.log('Structuring......');
console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// Receive two reutrn values from a fucntion
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 3, [4, 5]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default value
const [r = 1, s = 1, t = 1] = [6, 7];
console.log(r, s, t);
