//  5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('Rizu'));
console.log(Boolean({}));

const money = 10;
if(money){
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height = 100;
if(height){
    console.log("YAY!! height is defined");
} else {
    console.log("Height is UNDEFINED");
}