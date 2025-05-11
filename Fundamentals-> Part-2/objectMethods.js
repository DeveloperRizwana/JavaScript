const rizu = {
    firstName: 'Rizwana',
    lastName: 'Perween',
    birthYear: 2003,
    identity: 'Student',
    friends: ['Rukhsar','Nasima', 'Jasmine'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){ // this is also a property of obejct
    //     return 2025 - birthYear;
    // }

    // calcAge: function(){ 
    //     console.log(this);
    //     return 2025 - this.birthYear;
    // }

    // calcAge: function(birthYear){ // we can't do this
    //     return 2025 - birthYear;
    // }

    calcAge: function(){
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.identity}, and she  ${this.hasDriversLicense ? `has a driver's lisence.` : `hasn't a driver's lisence.`}`;
    }

};
// console.log(rizu.calcAge(2003));
console.log(rizu.calcAge());
console.log(rizu.age);
console.log(rizu.age);
console.log(rizu.age);

// challenge 
// rizu is a 22 years old student, and she has a driver's license
console.log(`${rizu.firstName} is a ${rizu.calcAge()}-years old ${rizu.identity}, and she  ${rizu.age >= 18 ? `has a driver's lisence.` : `hasn't a driver's lisence.`}`);

console.log(rizu.getSummary());
