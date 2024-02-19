export function addCustomMethod(message: string) {
  // Return the actual class decorator
  return function (constructor: Function) {
    // Add a new method to the class
    constructor.prototype.customMethod = function() {
      console.log(message);
    };
  };
}
