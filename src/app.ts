import Invoice from './classes/Invoice.js'
import Payment from './classes/Payment.js'
import HasFormatter from './interfaces/HasFormatter.js'

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice('alie', 'web work', 500)
// docTwo = new Payment('sam', 'web work', 600)

// let docs: HasFormatter[] = [] // <--- array will only take elements which meet the requirements of the HasFormatter interface

// docs.push(docOne)
// docs.push(docTwo)

// const inv1 = new Invoice('alie', 'work on the website', 300)
// const inv2 = new Invoice('andi', 'work on the website', 250)

// let invoices: Invoice[] = [] 
// invoices.push(inv1)
// invoices.push(inv2)
// console.log(invoices)

// invoices.forEach(inv => {
//   console.log(inv.format())
// })


const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter

  if(type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }

  console.log(
    doc
  )
})