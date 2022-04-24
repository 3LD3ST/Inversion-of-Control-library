<h2>Inversion of Control library</h2>
<p>A straightforward IoC library for TypeScript that allows developers to create loosely-coupled dependencies via an "Injector" function.</p>
<p>An implementation example:</p>

```
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

// "@Injector" is a TypeScript Decorator: https://www.typescriptlang.org/docs/handbook/decorators.html
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
```

<p>Currently supports transient objects and classes, with planned support for:</p>
<ul>
  <li>Constants, functions, symbols, additional types</li>
  <li>Identifying and logging circular dependencies</li>
  <li>Control over scope of dependencies (i.e. singletons)</li>
</ul>
<p>This library is still in beta and has not been tested sufficiently with vanilla JS or transpiled code.</p>
