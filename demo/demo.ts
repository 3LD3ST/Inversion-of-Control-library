import { Injector } from "../src/index";

class Storage {
  size: string | undefined;
  type: string | undefined;
  constructor() {
    this.size = "1TB";
    this.type = "SSD";
  }
  retrieveSize(): string | undefined {
    return this.size;
  }
  retrieveType(): string | undefined {
    return this.type;
  }
}

class Memory {
  amount: string | undefined;
  constructor() {
    this.amount = "16GB";
  }
  retrieveAmount(): string | undefined {
    return this.amount;
  }
}

@Injector([Storage, new Memory()])
class Laptop {
  Storage: any;
  Memory: any;
  model: string | undefined;
  constructor(model: string) {
    this.model = model;
  }
}

const myMacBook = new Laptop("MacBook Pro");

console.log(`model: ${myMacBook.model}`);
console.log(`storage size: ${myMacBook.Storage.size}`);
console.log(`storage type: ${myMacBook.Storage.type}`);
console.log(`memory amount: ${myMacBook.Memory.amount}`);
