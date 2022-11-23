"use strict";
let greet;
// we can specify a function signature
// example 1
let greeting;
greeting = (name, greeting) => {
    console.log(`${greeting}, ${name}`);
};
// example 2
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else if (action === 'subtract') {
        return num1 - num2;
    }
    else {
        return 0;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
