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
