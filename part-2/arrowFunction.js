// Arrow function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(2003);
// console.log(age3);

const yearsUntillRetirement =(birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirment = 65 - age;
    // return retirment;
    return `${firstName} retires in ${retirment} years`;
}

console.log(yearsUntillRetirement(2003, `Rizwana`));
console.log(yearsUntillRetirement(1996, `Nusrat`));