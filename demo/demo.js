"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
var index_1 = require("../src/index");
var Storage = /** @class */ (function () {
  function Storage() {
    this.size = "1TB";
    this.type = "SSD";
  }
  Storage.prototype.retrieveSize = function () {
    return this.size;
  };
  Storage.prototype.retrieveType = function () {
    return this.type;
  };
  return Storage;
})();
var Memory = /** @class */ (function () {
  function Memory() {
    this.amount = "16GB";
  }
  Memory.prototype.retrieveAmount = function () {
    return this.amount;
  };
  return Memory;
})();
// "@Injector" is a TypeScript Decorator: https://www.typescriptlang.org/docs/handbook/decorators.html
var Laptop = /** @class */ (function () {
  function Laptop(model) {
    this.model = model;
  }
  // eslint-disable-next-line
  Laptop = __decorate([(0, index_1.Injector)([Storage, new Memory()])], Laptop);
  return Laptop;
})();
var myMacBook = new Laptop("MacBook Pro");
console.log("model: ".concat(myMacBook.model));
console.log("storage size: ".concat(myMacBook.Storage.size));
console.log("storage type: ".concat(myMacBook.Storage.type));
console.log("memory amount: ".concat(myMacBook.Memory.amount));
