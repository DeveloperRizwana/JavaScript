'use strict';

/////// challenge -> 1 ////////
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const ceckDogs = function (dogsJulia, dogsKate) {
  //   const correctedDogsJulia = dogsJulia.slice();
  //   correctedDogsJulia.splice(0, 1);
  //   correctedDogsJulia.splice(-2);
  dogsJulia.splice(0, 1);
  dogsJulia.splice(-2);

  const dogs = dogsJulia.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (val, i) {
    if (val >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and ${val} years old...`);
    } else {
      console.log(`Dog number ${i + 1} is still  a puppy 🐶`);
    }
  });
};
ceckDogs(dogsJulia, dogsKate);

/////// challenge -> 2 ////////
const ages = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(function (cur) {
//     if (cur >= 2) {
//       return 2 * cur;
//     } else {
//       return 16 + cur * 4;
//     }
//   });
//    console.log(humanAges);
// };

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(cur => (cur <= 2 ? cur * 2 : 16 + cur * 4));
  const adult = humanAges.filter(cur => cur >= 18);
  console.log(humanAges);
  console.log(adult);
  // Average
  // const avg = adult.reduce((acu, cur) => acu + cur, 0) / adult.length;
  // Average of 2,3---- (2+3)/2 = 2.5 === 2/2 + 3/2 = 2.5
  const avg = adult.reduce((acu, cur, i, arr) => acu + cur / arr.length, 0);
  return avg;
};

console.log(ages);
const avgs = calcAverageHumanAge(ages);
console.log(avgs);
