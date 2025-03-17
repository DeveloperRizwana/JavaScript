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

// JS uses callback all the times
const high5 = function () {
  console.log('👋 ');
};
document.body.addEventListener('click', high5);

const frnds = function (name) {
  console.log(
    `${name} is one of the friends..They are together since childhood`
  );
};

const friendsArray = ['Rizwana', 'Nusrat', 'Jasmine', 'Choti'];
friendsArray.forEach(frnds);
alert(`These 4 girls are best friends: ${friendsArray.join(', ')}`);
