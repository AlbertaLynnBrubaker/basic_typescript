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