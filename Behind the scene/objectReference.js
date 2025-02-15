'use strict';

//Object reference in practice (Shallow vs. Deep copies)

const rabia = {
  firstName: 'Rabia',
  lastName: 'Perween',
  age: 28,
};

const marriedRabia = rabia;
marriedRabia.lastName = "Rahil";

console.log("Before:", rabia);
console.log("After:", marriedRabia);

// rabia = {x:23}; // Errro

rabia.age = 30;

