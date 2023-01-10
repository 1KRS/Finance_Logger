"use strict";
//classes
class Invoice {
    client;
    details;
    amount;
    // Α΄τρόπος
    //   client: string;
    //   details: string;
    //   amount: number;
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    // Β΄τρόπος
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} χρωστάει ${this.amount}€ για ${this.details}`;
    }
}
const invOne = new Invoice('Μητσουέλ', 'Κοψίδια', 35);
const invTwo = new Invoice('Χωστούδς', 'Πίτσες', 30);
const invThree = new Invoice('Ζορζάκ', 'Πιτόγυρα', 25);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.push(invThree);
invoices.forEach(inv => {
    console.log(`Ο ${inv.client} πλήρωσε για τα ${inv.details} ${inv.amount}`, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
