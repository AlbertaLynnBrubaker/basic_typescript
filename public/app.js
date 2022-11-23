"use strict";
const anchor = document.querySelector('a'); // <--- adding an exclamation mark lets TS know that WE KNOW that variable will come back correctly
//   console.log(anchor.href) <--- TS throws an error because it does not have access to the index.html page until after it compiles and it is worried our anchor is going to come back null
// if(anchor){ <--- we can either add runtime logic to clear compiler errors
//   console.log(anchor.href)
// } 
// console.log(anchor.href)
// const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form'); // <--- it will still pull the form we are looking for BUT it will not recognize the HTML element or set the specialized type to HTMLFormElement, only type: Element
const formWithTypecasting = document.querySelector('.new-item-form');
// console.log(formWithTypecasting.children)
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
