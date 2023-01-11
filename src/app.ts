import { Invoice } from './classes/Invoice.js';

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Δημήτρης',
  age: 39,
  speak(language: 'Ελληνικά'): void {
    console.log(`Ο ${this.name} μιλάει ${language}`)
  },
  spend(amount: number): number {
    console.log(`Ξόδεψα ${amount}`);
    return amount;
  },
}

const greetPerson = (person: IsPerson) => {
  console.log(`Γεια σου ${person.name}`);
}

greetPerson(me);

console.log(me);

const invOne = new Invoice('Μητσουέλ', 'Κοψίδια', 35);
const invTwo = new Invoice('Χωστούδς', 'Πίτσες', 30);
const invThree = new Invoice('Ζορζάκ', 'Πιτόγυρα', 25);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.push(invThree);

invoices.forEach(inv => {
  console.log(`Ο ${inv.client} πλήρωσε για τα ${inv.details} ${inv.amount}`, inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
})