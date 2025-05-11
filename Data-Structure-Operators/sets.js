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

const orderSet = new Set([
  'Pizza',
  'Pasta',
  'Pasta',
  'Pasta',
  'Pasta',
  'Panipuri',
  'Samosa',
  'Pizza',
  'Pizza',
]);

console.log(orderSet);
console.log(orderSet.size);

//True or False
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Chicken'));

// Add Element
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

// Delete elemnt
orderSet.delete('Panipuri');
console.log(orderSet);

for (const i of orderSet) {
  console.log(i);
}
// orderSet.clear();
// console.log(orderSet);

// Example
const staff = ['waiter', 'manager', 'waiter', 'chef', 'waiter', 'chef'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(staff).size);

console.log(new Set('rizwanaperween').size);

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// intersection method
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

// Union method
const italianMexicoFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicoFusion);

console.log(new Set([...italianFoods, ...mexicanFoods]));

console.log([...new Set([...italianFoods, ...mexicanFoods])]); // Array

// Unique element - difference method
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian:', uniqueItalianFoods);

// difference method
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican:', uniqueMexicanFoods);

// symmetric Difference method
const uniqueItaliaAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItaliaAndMexicanFoods);

// IsDisJointFrom method
console.log(italianFoods.isDisjointFrom(mexicanFoods));
