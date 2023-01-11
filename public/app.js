import { Invoice } from './classes/Invoice.js';
const me = {
    name: 'Δημήτρης',
    age: 39,
    speak(language) {
        console.log(`Ο ${this.name} μιλάει ${language}`);
    },
    spend(amount) {
        console.log(`Ξόδεψα ${amount}`);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log(`Γεια σου ${person.name}`);
};
greetPerson(me);
console.log(me);
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
