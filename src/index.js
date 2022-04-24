"use strict";
/* FEATURES TO ADD:
  - Support for constants, symbols, additional types
  - Identify and log circular dependencies
  - Control over scope of dependencies (singletons)
*/
exports.__esModule = true;
exports.Injector = void 0;
function Injector(children) {
  // REFACTOR: Implement stronger typing for 'parent' parameter
  return function (parent) {
    // REFACTOR: Implement stronger typing for 'child' parameter
    children.forEach(function (child) {
      try {
        switch (typeof child) {
          case "function":
            // Class has not been instantiated; instantiate before injection
            parent.prototype[child.name] = new child();
            break;
          case "object":
            // Class has already been instantiated; create dependency
            parent.prototype[child.constructor.name] = child;
            break;
        }
      } catch (error) {
        // REFACTOR: Needs more robust error handling/testing
        throw new Error(
          "An error occured with ".concat(child, ': "').concat(error, '"')
        );
      }
    });
  };
}
exports.Injector = Injector;
