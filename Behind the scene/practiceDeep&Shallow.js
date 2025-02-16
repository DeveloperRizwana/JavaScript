'use strict';

const obj1 = {
  name: 'Rizu',
  age: 19,
};

const obj2 = obj1;
obj2.age = 22;

console.log(obj1.age, obj2.age);

// Shallow
const arr1 = [1, 2, [3, 4]];
const arr2 = { ...arr1 };

arr2[2][0] = 9;
arr2[2][1] = 9;

console.log(arr1);
console.log(arr2);

// Deep
const number = [10, 20, [30, 40]];
const number2 = structuredClone(number);

number2[2][0] = 9;
number2[2][1] = 9;

console.log(number);
console.log(number2);

const names = ['Rizu', 'Choti', 'Noorjahan', ['Rabia', 'Salman']];

const names2 = structuredClone(names);

// names2[2].push('Noorjahan');
names2[3][2] = 'Aahish';
names2[3][3] = 'Aatif';
names2[3][4] = 'Islam';
// names2.names.push('Islam');

console.log('Before : ' + names);
console.log('after : ' + names2);
