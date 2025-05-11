const mark = {
    fullName: 'Mark Mille',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
      }
};

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// const ans = function() {
//     if(john[this.bmi] > mark[this.bmi]) {
//         console.log(`${john.fullName}'s BMI ${john.calcBMI()} is higher than ${mark.fullName}'s ${mark.calcBMI()}!`);
//     } else {
//         console.log(`${mark.fullName}'s BMI ${mark.calcBMI()} is higher than ${john.fullName}'s ${john.calcBMI()}!`);
//     }
// }

mark.calcBMI();
john.calcBMI();

console.log(john.bmi > mark.bmi ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!` : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`);