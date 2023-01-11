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
    constructor(
      public client: string,
      public details: string,
      public amount: number,
    ) {}
  
    format() {
      return `${this.client} χρωστάει ${this.amount}€ για ${this.details}`
    }
  }