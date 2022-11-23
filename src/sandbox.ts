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



