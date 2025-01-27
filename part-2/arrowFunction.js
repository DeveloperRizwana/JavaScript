// Arrow function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(2003);
// console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirment = 65 - age;
    // return retirment;
    return `${firstName} retires in ${retirment} years`;
}

console.log(yearsUntillRetirement(2003, `Rizwana`));
console.log(yearsUntillRetirement(1996, `Nusrat`));

// functions calling other functions
function cutFruitPieces(fruit){
    return fruit * 4;
}
// this is an anonymous function expression
const fruitProccessor = function (apples, oranges){

    const applePieces = cutFruitPieces(apples);
    const orangePices = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePices} pieces of oranges..`;
    return juice;
}

console.log(fruitProccessor(2,4));