import Invoice from './classes/Invoice.js'

const inv1 = new Invoice('alie', 'work on the website', 300)
const inv2 = new Invoice('andi', 'work on the website', 250)

let invoices: Invoice[] = [] 
invoices.push(inv1)
invoices.push(inv2)
console.log(invoices)

invoices.forEach(inv => {
  console.log(inv.format())
})






const form = document.querySelector('.new-item-form') as HTMLFormElement

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