const age = '18';
// strict equality opeartor
if(age === 18) {
    console.log('You just became an adult: (strict)');
} else {
    console.log('You are not an adult:');
}

// loose equality opeartor
if(age == 18) console.log('You are not an adult: (loose)')

const favourite = prompt("What's your favourite number?");
console.log(favourite)    ;
console.log(typeof favourite);

if(favourite == 8) { // '8' == 4
    console.log('Cool! 4 is an amazing number!');
} else {
    console.log("It's not a favourite number!");
}


const favouriteN = Number(prompt("What's your favourite number?"));
console.log(favouriteN);
console.log(typeof favouriteN);

if(favouriteN === 4) { // 4 == 4
    console.log('Cool! 4 is an amazing number!');
} else if(favouriteN === 6){
    console.log('6 is also a cool number!');
} else {
    console.log('Number is not 4 or 6');
}

if(favouriteN !== 4) console.log('Why not 4?');


