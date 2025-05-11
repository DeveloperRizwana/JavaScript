'use strict';

//Object reference in practice (Shallow vs. Deep copies)

const rabia = {
  firstName: 'Rabia',
  lastName: 'Perween',
  age: 28,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedRabia = marryPerson(rabia, 'Rahil');

// const marriedRabia = rabia;
// marriedRabia.lastName = 'Rahil';
console.log('Before:', rabia);
console.log('After:', marriedRabia);

// rabia = {x:23}; // Errro

rabia.age = 30;

const rabia2 = {
  firstName: 'Rabia',
  lastName: 'Perween',
  age: 28,
  family: ['Aatif', 'Aahish'],
};

// Shallow copy
const copyOfRabia2 = { ...rabia2 };
copyOfRabia2.lastName = 'Rahil';

// console.log(rabia2, copyOfRabia2);
// copyOfRabia2.family.push('Anam');
// copyOfRabia2.family.push('Aahil');

// console.log('Before:', rabia2);
// console.log('After:', copyOfRabia2);

// Deep copy/clone
const rabiaClone = structuredClone(rabia2);
rabiaClone.family.push('Anam');
rabiaClone.family.push('Aahil');

console.log('Before clone:', rabia2);
console.log('After clone:', rabiaClone);
