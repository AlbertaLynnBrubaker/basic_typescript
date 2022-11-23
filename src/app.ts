class Invoice {
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