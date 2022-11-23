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