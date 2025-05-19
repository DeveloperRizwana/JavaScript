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

/// Challenge-3
const calcAverageHumanAge2 = ages =>
  ages
    .map(cur => (cur <= 2 ? cur * 2 : 16 + cur * 4))
    .filter(cur => cur >= 18)
    .reduce((acu, cur, i, arr) => acu + cur / arr.length, 0);

const avgs2 = calcAverageHumanAge2(ages);
console.log(avgs2);

// challenge - 4
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1
const huskyWeight = breeds.find(cur => cur.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2
const dogBothActivities = breeds.find(
  cur => cur.activities.includes('running') && cur.activities.includes('fetch')
).breed;
console.log(dogBothActivities);

// 3
// const allActivities = breeds.map(cur => cur.activities).flat();
const allActivities = breeds.flatMap(cur => cur.activities);
console.log(allActivities);

// 4
const uniqueActivities = [...new Set(breeds.flatMap(cur => cur.activities))];
console.log(uniqueActivities);

// 5
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(cur => cur.activities.includes('swimming'))
      .flatMap(cur => cur.activities)
      .filter(activity => activity !== 'swimming')
  ),
];
console.log(swimmingAdjacent);

// 6
const averageWeightAll = breeds.every(cur => cur.averageWeight >= 10);
console.log(averageWeightAll);

// 7
const activeBreed = breeds.some(cur => cur.activities.length >= 3);
console.log(activeBreed);

// BONUS
const fetchWeight = breeds
  .filter(cur => cur.activities.includes('fetch'))
  .map(cur => cur.averageWeight);

const haviestWeightBreed = Math.max(...fetchWeight);

console.log(fetchWeight);
console.log(haviestWeightBreed);

// challenge --> 5
// TEST DATA:
// Formula : recommendedFood = weight ** 0.75 * 28
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// --> 1
dogs.forEach(cur => {
  cur.recFood = Math.trunc(cur.weight ** 0.75 * 28);
});
console.log(dogs);

// --> 2
const dogSarah = dogs.find(cur => cur.owners.includes('Sarah'));

dogSarah.curFood > dogSarah.recFood
  ? console.log(`it's eating too much `)
  : console.log(`it's eating too little`);

// --> 3
const ownersTooMuch = dogs
  .filter(cur => cur.curFood > cur.recFood)
  .map(cur => cur.owners)
  .flat();
console.log(ownersTooMuch);

const ownersTooLittle = dogs
  .filter(cur => cur.curFood < cur.recFood)
  .map(cur => cur.owners)
  .flat();
console.log(ownersTooLittle);

// --> 4
console.log(`${ownersTooMuch.join(' and ')}'s dogs eat too much!!`);
console.log(`${ownersTooLittle.join(' and ')}'s dogs eat too little!!`);

// --> 5
console.log(dogs.some(cur => cur.curFood ===  cur.recFood));

// --> 6
console.log(
  dogs.every(
    cur =>
      cur.curFood > Math.trunc(cur.recFood * 0.9) &&
      cur.curFood < Math.trunc(cur.recFood * 1.1)
  )
);

// --> 7
const ownerOkay = dogs.filter(
  cur =>
    cur.curFood >= Math.trunc(cur.recFood * 0.9) &&
    cur.curFood <= Math.trunc(cur.recFood * 1.1)
);
console.log(ownerOkay);

// --> 8
const groupdByFoodPortion = Object.groupBy(dogs, cur => {
  if (cur.curFood === cur.recFood) return 'exact';
  if (cur.curFood > cur.recFood) return 'too-much';
  if (cur.curFood < cur.recFood) return 'too-little';
});
console.log(groupdByFoodPortion);

// --> 9
const dogsGroup = Object.groupBy(dogs, cur => {
  const dogsLength = cur.owners.length;
  return dogsLength;
});
console.log(dogsGroup);

// --> 10
const sortedDogs = dogs.slice().sort((a, b) => {
  if (a.recFood > b.recFood) return 1; // swap
  if (a.recFood < b.recFood) return -1; // no swap
  return 0;
});
console.log(dogs);
console.log(sortedDogs);
