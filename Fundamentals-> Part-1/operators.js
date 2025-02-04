// math operators
const now = 2025;
const ageofRizwana = now - 2003;
const ageOfRazia = now - 2006;
console.log(ageofRizwana, ageOfRazia);

console.log(ageofRizwana*2, ageofRizwana/10, 2 ** 3);

const firstName = 'Rizwana';
const lastName = 'Perween';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 10;
x += 10; // x -> 30
x *= 10; // x -> 300
x /= 10; // x -> 30
x++; // x -> 31
x--;    
console.log("The value of X is : " + x);

//comparision operators - <,>,<=,=>
console.log(ageofRizwana > ageOfRazia); 
console.log(ageOfRazia >= 18);

const isFullAge = ageOfRazia >= 18;
console.log(now - 2003 > now - 2006);

const currentYear = 2025;
const ageofAhish = now - 2003;
const ageOfAatif = now - 2006;

const averageAge = (ageofAhish+ageOfRazia)/2;
console.log(ageofAhish, ageOfAatif, averageAge);
console.log(currentYear - 2003 > currentYear - 2006);

let n, y;
n = y = 25 - 10 -5;
console.log(n, y);
