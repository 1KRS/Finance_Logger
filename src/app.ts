import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Μητσουέλ', "Πιτόγυρα", 10);
// docTwo = new Payment('Χωστούδς', "Κοψίδια", 14);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('Μητσουέλ', 'Κοψίδια', 35);
// const invTwo = new Invoice('Χωστούδς', 'Πίτσες', 30);
// const invThree = new Invoice('Ζορζάκ', 'Πιτόγυρα', 25);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.push(invThree);

// invoices.forEach(inv => {
//   console.log(`Ο ${inv.client} πλήρωσε για τα ${inv.details} ${inv.amount}`, inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  console.log(doc)
})