'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toUpperCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher - order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is FUN!!', upperFirstWord);
transformer('JavaScript is FUN!!', oneWord);

// Callback functions ->
// JS uses callback all the times
// example-1
const high5 = function () {
  console.log('👋 ');
};
document.body.addEventListener('click', high5);

// example-2
const frnds = function (name) {
  console.log(
    `${name} is one of the friends..They are together since childhood`
  );
};

// example-3
const friendsArray = ['Rizwana', 'Nusrat', 'Jasmine', 'Choti'];
friendsArray.forEach(frnds);

// example-4
// alert(`These 4 girls are best friends: ${friendsArray.join(', ')}`);

// example-4
function greet(name, callback) {
  console.log('Hello!!', name + ' 😊 ');
  callback();
}
function sayGoodBye() {
  console.log('Goodbye!!');
}

greet('Rizwana', sayGoodBye);

// example-5
function fetchData(callback) {
  console.log(`Fetching Data.....`);

  setTimeout(() => {
    // this is a inbuilt function of js
    console.log('Data Fetched!!!');
    callback();
  }, 3000);
}

function processData() {
  console.log('Processing Data!!');
}

fetchData(processData);

// example-6
console.log('start');

setTimeout(() => {
  console.log('Maggie cooked in 2 * 60 seconds');
}, 2000);

console.log('End');
