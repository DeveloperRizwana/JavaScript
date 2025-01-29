const friends = ['Rizu', 'Nusrat', 'Jasmine', 'Shabina'];
console.log(friends);

console.log(friends[3]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length-1]);
friends[3] = 'Rukhsar';
// friends = ['Rizu', 'Choti']; // we can't do this
console.log(friends);

// Array methods
// add elements
const newLength = friends.push('Nasime'); // last
console.log(friends);
console.log(newLength);
friends.unshift('Ahish'); // starting
console.log(friends);

// remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

// index of element
console.log(friends.indexOf('Rizu'));
console.log(friends.indexOf('Choti'));

//true or false
friends.push(23);
console.log(friends.includes('Rizu'));
console.log(friends.includes('Choti'));
console.log(friends.includes(23));

if(friends.includes('Sulma')){
    console.log(`Your feeind..`)
} else {
console.log(`She is not your friend`);
}

const firstName = 'Rizwana';
const Rizu = [firstName, 'Perween', 2025-2003, 'Student'];
console.log(Rizu);

const year = new Array(1990, 1980, 1970, 1960);
console.log(year);
console.log(year[0]);
console.log(year[1]);

// Exercise
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const years = [1990, 1980, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);
