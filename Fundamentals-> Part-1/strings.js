const firstName = 'Rizwana';
const lastName = 'Perween';
const identity = 'Student';
const birthYear = 2003;
const year = 2025;

const Rizu = "I'm " + firstName + ' ' + lastName + ', a ' + (year - birthYear)  + ' years old '  +  identity + "!";

console.log(Rizu);

// template literals 
const rizuNew = `I'm ${firstName} ${lastName}, a ${year - birthYear} years old ${identity}!`
console.log(rizuNew);

console.log(`Just a regular string...`);

console.log('string with\n\
multiple\n\
lines');

console.log(`string with
multiple
lines`)    

const age = 15;

// control structure     
if (age >= 18) {
    console.log('Razia can start driving license');
} else {
   const yearsLeft = 18 - age;
   console.log(`Razia is too young. Wait another ${yearsLeft} years :)`);
}

const bYear = 2025;
let century;

if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(`${century} Century`)

