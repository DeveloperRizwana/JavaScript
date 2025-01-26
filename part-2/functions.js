function logger(){
    console.log(`My name is Rizwana Perween`);
}

// calling / runnning / inwoking function
logger();
logger();
logger();

function fruitProccessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges..`;
    return juice;
}

const applejuice = fruitProccessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProccessor(2,4);
console.log(appleOrangeJuice);

// FUNCTION DECLARATIONS
function calcAge(birthYear){
    return 2025 - birthYear;
}
const age = calcAge(2003);

// function expression
const calcAge2 = function (birthYear){
    return 2025 - birthYear;
}
// we can't access 'calcAge2' before initialization in javaScript
const age2 = calcAge2(2003);

console.log(age, age2);

// task
function print(name, age){
    const printAns = `My name is ${name} and i'm ${age} years old`;
    return printAns;
}

const ans = print(`Rizwana Perween`, 22);
console.log(ans);