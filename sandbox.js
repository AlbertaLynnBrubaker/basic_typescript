// EXPLICIT TYPES
var character;
var age;
var isLoggedIn;
// age = 'alie' <--- not allowed
age = 30;
// isLoggedIn = 'true' <--- not allowed
isLoggedIn = true;
// ARRAYS
var ninjas;
// ninjas = [10, 20] <--- not allowed
ninjas = ['alie', 'sam'];
var fruit = []; // <--- if we don't initialize the array as an empty array, we can't use array methods on it (like .push(), etc...) 
fruit.push('banana');
// UNION TYPE
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
// => ['hello', 20, false]
var uid;
uid = '123';
uid = 123;
// uid = false <--- not allowed
// OBJECTS
var funstuff;
funstuff = { name: 'alie', age: 36 };
// funstuff = '' <--- not allowed
var superFunstuff;
superFunstuff = {
    name: 'alie',
    age: 36,
    hometown: 'Edmonton'
};
