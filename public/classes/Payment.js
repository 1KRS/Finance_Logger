export class Payment {
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
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Ο ${this.recipient} οφείλει να λάβει ${this.amount}€ για ${this.details}`;
    }
}
