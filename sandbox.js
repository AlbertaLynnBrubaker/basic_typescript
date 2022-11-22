// ARRAYS
var names = ['alie', 'andi', 'sam'];
// names = 'frankie' <--- not allowed. An array can't be redeclared as another type
names.push('chris'); // <--- allowed
// names.push(10)  <--- not allowed. We cannot push a type that we did not initially declare
var numbers = [10, 20, 30, 40];
numbers.push(25); // <--- allowed
// numbers.push('freddie') <--- not allowed
var mixed = ['joe', 1, 'alice', 25]; // <--- declared with both strings and nums
mixed.push('bob');
mixed.push(11);
// => ['joe', 1, 'alice', 25, 'bob', 11]
mixed[0] = 2; // <--- any allowed type can be replaced by any other allowed type
// => [2, 1, 'alice', 25, 'bob', 11]
// OBJECTS
var ninja = {
    name: 'alie',
    belt: 'black',
    age: 36 // <--- if we declare a property of an object as a particular type, that property will always have to be that type
};
// ninja.age = '25' <--- not allowed
// ninja.skills = ['jujitsu', 'stealth'] <--- not allowed. We can't add new properties to an object after it has been declared !IMPORTANT!
ninja = {
    name: 'andi',
    belt: 'brown',
    age: 30
}; // <--- allowed. We can redeclare the object BUT THE PROPERTIES MUST REMAIN THE SAME. We can change the values of the properties, but not the properties themselves OR their types. We cannot add new properties.
