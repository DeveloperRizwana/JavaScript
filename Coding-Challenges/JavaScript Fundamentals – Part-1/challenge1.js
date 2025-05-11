// challenge - 1
const heightOfMark = 1.69;
const massOfMark = 78;
const BMIMark = massOfMark / (heightOfMark * heightOfMark);
console.log("Mark's BMI is : " + BMIMark);

const heightOfJohn = 1.95;
const massOfJohn = 92;
const BMIJohn = massOfJohn / (heightOfJohn * heightOfJohn);
console.log("John's BMI is : " + BMIJohn);

// const isMarkHigherBMI = BMIMark > BMIJohn;
// console.log(" Is Mark higher BMI : " + isMarkHigherBMI);

// challenge - 2
if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's!`);
}