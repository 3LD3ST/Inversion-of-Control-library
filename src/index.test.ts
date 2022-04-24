import { Injector } from "./index";

describe("Injector Tests", () => {
  test("inject class", () => {
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

    @Injector([Storage])
    class Laptop {
      Storage: any;
      Memory: any;
      model: string | undefined;
      constructor(model: string) {
        this.model = model;
      }
    }

    const myMacBook = new Laptop("MacBook Pro");
    expect(myMacBook.Storage.size).toBe("1TB");
    expect(myMacBook.Storage.type).toBe("SSD");
  });

  test("inject instance", () => {
    class Memory {
      amount: string | undefined;
      constructor() {
        this.amount = "16GB";
      }
      retrieveAmount(): string | undefined {
        return this.amount;
      }
    }

    @Injector([new Memory()])
    class Laptop {
      Storage: any;
      Memory: any;
      model: string | undefined;
      constructor(model: string) {
        this.model = model;
      }
    }

    const myMacBook = new Laptop("MacBook Pro");
    expect(myMacBook.Memory.amount).toBe("16GB");
  });
});
