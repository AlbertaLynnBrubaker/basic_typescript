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