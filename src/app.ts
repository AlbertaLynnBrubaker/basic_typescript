class Invoice {
  // readonly client: string
  // public details: string
  // private amount: number // <--- we can explicitly declare something public BUT public is the default behavior of a class. If we change it to private, we will get errors because we will not be allowed to log the variables OR change them. readonly will not let us change a variable inside the class or outside the class
  
  // constructor (c: string, d: string, a: number) {
  //   this.client =  c
  //   this.details = d
  //   this.amount = a
  // }

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {} // IF we are using the access modifiers, this method of writing the constructor works OTHERWISE we have to use the syntax above

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