//classes
class Invoice {

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
  constructor(
    public client: string,
    public details: string,
    public amount: string,
  ) {}

  format() {
    return `${this.client} χρωστάει ${this.amount}€ για ${this.details}`
  }
}

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