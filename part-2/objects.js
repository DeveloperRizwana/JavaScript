const Rizwana = {
    firstName: 'Rizwana',
    lastName: 'Perween',
    age: 2025 - 2003,
    friends: ['Jasmine', 'Nasima', 'Nusrat', 'Shabina', 'Umrah', 'Nasima']
};
console.log(Rizwana);
console.log(Rizwana.friends);
console.log(Rizwana['age']);

const nameKey = 'Name';
console.log(Rizwana['first' + nameKey]);
console.log(Rizwana['last' + nameKey]);

// console.log(Rizwana.'first' + nameKey); // we can't do this

const interestedIn = prompt(`What do you want to know about Rizwana? Choose between firstName, lastName, age and friends`);

if(Rizwana[interestedIn]){
    console.log(Rizwana[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends`);
}

Rizwana.location = 'India';
Rizwana['twitter'] = '@DPerween39952';
console.log(Rizwana);

console.log(`${Rizwana.firstName} has ${Rizwana.friends.length} friends, and her best friend is ${Rizwana.friends[2]}`);
