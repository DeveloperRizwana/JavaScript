'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Pyhton', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    
    let user = prompt(this.question, this.options);
  },
};

const register = poll.registerNewAnswer;
register.call(poll);

// let userInput = prompt('Enter your name: ');
// console.log("Hello! " + userInput)
