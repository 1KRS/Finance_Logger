export class Invoice {
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
