LESSON 2 TYPE BASICS

let character = 'sam'

let age = 30

let isBlackbelt = false

character = 'andi' // the value of the variable can be changed

// character = 20  but the type of the variable cannot be changed

// age = 'funstuff' <--- not allowed

// isBlackbelt = 'false' <--- not allowed

const circ = (diameter: number) => { // <--- syntax variableName: variableType

  return diameter * Math.PI

}

// console.log(circ('hello')) <--- will log NaN to the console. TS knows that Math.PI is a num.

console.log(circ(10))

************************************************************

LESSON 3 ARRAYS AND OBJECTS

// ARRAYS

let names = ['alie', 'andi', 'sam']

// names = 'frankie' <--- not allowed. An array can't be redeclared as another type

names.push('chris') // <--- allowed

// names.push(10)  <--- not allowed. We cannot push a type that we did not initially declare

let numbers = [10, 20, 30, 40]

numbers.push(25) // <--- allowed

// numbers.push('freddie') <--- not allowed

let mixed = ['joe', 1, 'alice', 25] // <--- declared with both strings and nums

mixed.push('bob')

mixed.push(11)

// => ['joe', 1, 'alice', 25, 'bob', 11]

mixed[0] = 2 // <--- any allowed type can be replaced by any other allowed type

// => [2, 1, 'alice', 25, 'bob', 11]

// OBJECTS

let ninja = {

  name: 'alie',

  belt: 'black',

  age: 36 // <--- if we declare a property of an object as a particular type, that property will always have to be that type

}

// ninja.age = '25' <--- not allowed

// ninja.skills = ['jujitsu', 'stealth'] <--- not allowed. We can't add new properties to an object after it has been declared !IMPORTANT!

ninja = {

  name: 'andi',

  belt: 'brown',

  age: 30,

  // hometown: 'SF' <--- not allowed

} // <--- allowed. We can redeclare the object BUT THE PROPERTIES MUST REMAIN THE SAME. We can change the values of the properties, but not the properties themselves OR their types. We cannot add new properties.

************************************************************

LESSON 4 EXPLICIT TYPES AND UNION TYPES

// EXPLICIT TYPES

let character: string

let age: number

let isLoggedIn: boolean

// age = 'alie' <--- not allowed

age = 30

// isLoggedIn = 'true' <--- not allowed

isLoggedIn = true

// ARRAYS

let ninjas: string[]

// ninjas = [10, 20] <--- not allowed

ninjas = ['alie', 'sam']

let fruit: string[] = [] // <--- if we don't initialize the array as an empty array, we can't use array methods on it (like .push(), etc...) 

fruit.push('banana')

// UNION TYPE

let mixed: (string|number|boolean)[] = []

mixed.push('hello')

mixed.push(20)

mixed.push(false)

// => ['hello', 20, false]

let uid: string|number

uid = '123'

uid = 123

// uid = false <--- not allowed

// OBJECTS

let funstuff: object

funstuff = { name: 'alie', age: 36 }

// funstuff = '' <--- not allowed

let superFunstuff: {

  name: string,

  age: number,

  hometown: string

}

superFunstuff = {

  name: 'alie',

  age: 36,

  hometown: 'Edmonton'

}

************************************************************

// LESSON 5 DYNAMIC TYPES

let age: any = 25

age = true

age = '36'

age = {

  name: 'alie'

}

// In general, using a type of any isn't ideal and should be used only is extremely niche cases

let mixed: any[] = []

mixed.push(5)

mixed.push('alie')

mixed.push(true)

let obj: { name: any, age: any }

obj = { name: 'alie', age: 36 } 

obj = { name: false, age: '36' } // <--- we can change the values to any type

// AGAIN... this is not ideal and SHOULD ONLY BE USED IN VERY NICHE CASES

************************************************************

LESSON 6 BETTER WORKFLOW AND TSCONFIG

on command line use $ tsc --init    to initialize a tsconfig.json file in the working directory
