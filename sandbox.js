var character = 'sam';
var age = 30;
var isBlackbelt = false;
character = 'andi'; // the value of the variable can be changed
// character = 20  but the type of the variable cannot be changed
// age = 'funstuff' <--- not allowed
// isBlackbelt = 'false' <--- not allowed
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ('hello')) <--- will log NaN to the console. TS knows that Math.PI is a num.
console.log(circ(10));
