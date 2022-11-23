"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const inv1 = new Invoice('alie', 'work on the website', 300);
const inv2 = new Invoice('andi', 'work on the website', 250);
let invoices = []; // <--- only objects created with the Invoice class are allowed in the array
invoices.push(inv1);
invoices.push(inv2);
console.log(invoices);
inv1.client = 'sam';
inv2.amount = 600;
console.log(invoices); // <--- we can see the values on the invoices have been changed
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
