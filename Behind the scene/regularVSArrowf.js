'use strict';

// var firstName = 'Razia';

const rizu = {
  firstName: 'Rizwana',
  year: 2003,
  calcAge: function () {
    // console.log(this);
    console.log(2025 - this.year);

    // Solution -> 1
    // const self = this;
    // const isGenerationZ = function () {
    //   console.log(self);
    //   console.log(self.year >= 1997 && self.year <= 2012);
    // };
    // isGenerationZ();

    // Solution ->2
    const isGenerationZ = () => {
      console.log(this);
      console.log(this.year >= 1997 && this.year <= 2012);
    };
    isGenerationZ();
  },

  //   greet: () => console.log(`Hey! ${this.firstName}`), // Udefined -> because arrow functions don't have their own this , here "this" is a window object and in window object there is no any "firstName" object ...

  greet: function () {
    console.log(this);
    console.log(`Hey! ${this.firstName}`);
  },
};

rizu.greet();
rizu.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(3, 5);
addExpr(3, 5,35,18); // this legal

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}

// addArrow(2,3,4,5); // this is not allowed
