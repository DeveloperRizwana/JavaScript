'use strict';

// PROBLEM 1 ->
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2 ->
const calcTempAmplitudeNew = function (t1,t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
      if (typeof temps[i] !== 'number') continue;
  
      if (temps[i] > max) max = temps[i];
      if (temps[i] < min) min = temps[i];
    }
    console.log(max, min);
    return max - min;
  };
  
  const amplitudeNew = calcTempAmplitudeNew([1,2,3], [4,5,6]);
  console.log(amplitudeNew);
  