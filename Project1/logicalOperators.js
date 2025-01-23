const hasDriversLicense = true; //  A
const  hasGoodVision = true; // B   

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

if(hasDriversLicense && hasGoodVision) {
    console.log('Rizu is able to drive');
} else {
    console.log('Someone else should drive....')
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Razia is able to drive');
} else {
    console.log('Someone else should drive....')
}