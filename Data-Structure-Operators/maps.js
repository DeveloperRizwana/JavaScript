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

// set method
const rest = new Map();
rest.set('name', 'Spice Delight');
rest.set(1, 'New Delhi, India');
rest.set(2, 'Chennai, India');

rest
  .set('categories', ['Vegetarian', 'Non-Vegetarian', 'Street-Food'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'we are clossed :(');

// get method
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// has method
console.log(rest.has('categories'));

// delete method
rest.delete('close');
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try Again!!!'],
]);
console.log(question);

// Convert object to MAP
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Quiz Map
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(answer);

// const ans = answer === 3 ? question.get(true) : question.get(false);
// console.log(ans);
console.log(question.get(question.get('Correct') === answer));

// Convert map to array
console.log([...question]);

// methods
console.log([...question.keys()]);
console.log([...question.values()]);
