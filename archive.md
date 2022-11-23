## LESSON 2 TYPE BASICS

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

## LESSON 3 ARRAYS AND OBJECTS

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

## LESSON 4 EXPLICIT TYPES AND UNION TYPES

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

## LESSON 5 DYNAMIC TYPES

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

## LESSON 6 BETTER WORKFLOW AND TSCONFIG

on command line use $ tsc --init    to initialize a tsconfig.json file in the working directory

in the tsconfig.json file we have to comment in the:
  rootDir property with a value of "./src"
  outDir property with a value of "./public"
  add an "include": ['src'] outside the compilerOptions property to only watch files inside the src folder

************************************************************

## LESSON 7 FUNCTION BASICS

// let greet = () => {

//   console.log('hello, world')

// }

//greet = 'hello' <--- not allowed. greet is type function

let greet: Function // <--- explicit type of Function

greet = () => {

  console.log('hello, world')

}

const add = (a: number, b: number, c?: number | string ) => { // <--- a ? in front of the variable name makes the variable optional

  console.log(a + b)

  if(c) console.log(c)

}


add(5, 10)

// add(5, '10') <--- not allowed

add(5, 10, 'alie')


const minus = (a: number, b: number): number => { // <--- we can explicitly declare the return value's type

  return a + b

}


let result = minus(10, 7) // <--- TS will infer the return value of minus here, thus result will be type: number NOT type: Function


// const add = (a: number, b: number, c?: number | string ) => { 

//   console.log(a + b)

//   if(c) console.log(c)

// } <--- the return value of a function that does not return anything is a type: void. TSC will compile void as undefined BUT in TS void and undefined are separate things with similar behavior

************************************************************

## LESSON 8 ALIASES

```
type StringOrNum = string | number // < --- we can create an alias for virtually anything we can type elsewhere

type objWithName = { name: string, uid: StringOrNum } // <--- we can use our other alias in this object alias and replace virtually all the repeat code we had below with a single aliased word


const c = (input: any) => {
  console.log(input)
}


const logDetails = (uid: StringOrNum, item: string) => {
  c(`${item} has a uid of ${uid}`)
}

const greet = (user: objWithName) => {
  c(`${user.name} says hello`)
}

const greetAgain = (user: objWithName) => {
  c(`${user.name} says hello`)
}

logDetails(1234, 'playing card')
greet({name: 'alie', uid: 1234})
greetAgain({name: 'alie', uid: 1234})
```
************************************************************

## LESSON 9 FUNCTION SIGNATURES

```
let greet: Function
// we can specify a function signature

// example 1
let greeting: (a: string, b: string) => void

greeting = (name: string, greeting: string ) => {
  console.log(`${greeting}, ${name}`)
}

// example 2
let calc: (a: number, b: number, c: string) => number

calc = (num1: number, num2: number, action: string) => {
  if(action === 'add') {
    return num1 + num2
  } else if(action === 'subtract') {
    return num1 - num2
  } else {
    return 0
  }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void

type person = {name: string, age: number}

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`)
}
```
************************************************************

## LESSON 10 DOM INTERACTING AND TYPECASTING

```
const anchor = document.querySelector('a')! // <--- adding an exclamation mark lets TS know that WE KNOW that variable will come back correctly

//   console.log(anchor.href) <--- TS throws an error because it does not have access to the index.html page until after it compiles and it is worried our anchor is going to come back null

// if(anchor){ <--- we can either add runtime logic to clear compiler errors
//   console.log(anchor.href)
// } 

// console.log(anchor.href)

// const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form')! // <--- it will still pull the form we are looking for BUT it will not recognize the HTML element or set the specialized type to HTMLFormElement, only type: Element

const formWithTypecasting = document.querySelector('.new-item-form') as HTMLFormElement

// console.log(formWithTypecasting.children)

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  )
})
```
************************************************************

## LESSON 11 CLASSES

```class Invoice {
  client: string
  details: string
  amount: number
  
  constructor (c: string, d: string, a: number) {
    this.client =  c
    this.details = d
    this.amount = a
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

const inv1 = new Invoice('alie', 'work on the website', 300)
const inv2 = new Invoice('andi', 'work on the website', 250)

let invoices: Invoice[] = [] // <--- only objects created with the Invoice class are allowed in the array
invoices.push(inv1)
invoices.push(inv2)
console.log(invoices)

inv1.client = 'sam'
inv2.amount = 600

console.log(invoices) // <--- we can see the values on the invoices have been changed

... form stuff from lesson 10 ...

```