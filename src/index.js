"use strict";
exports.__esModule = true;
exports.Injector = void 0;
function Injector(children) {
    return function (parent) {
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
            }
            catch (error) {
                throw new Error("An error occured with ".concat(child, ": \"").concat(error, "\""));
            }
        });
    };
}
exports.Injector = Injector;
