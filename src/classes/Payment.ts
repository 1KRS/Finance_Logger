import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
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
      public recipient: string,
      public details: string,
      public amount: number,
    ) {}
  
    format() {
      return `Ο ${this.recipient} οφείλει να λάβει ${this.amount}€ για ${this.details}`
    }
  }