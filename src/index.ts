import { addCustomMethod } from "./classDecorator";
import { logMethod, withPrefixedLog } from "./methodDecorator";

interface UserWithCustomMethod extends User {
  customMethod(): void;
}
@addCustomMethod('My custom method return value')
class User {
  constructor(private name: string, private age: number) {}

  @logMethod
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  @withPrefixedLog('AGE:')
  printAge() {
    console.log(`I am ${this.age} years old`);
  }
}



const user = new User('Kenneth', 4000) as UserWithCustomMethod
user.greet()
user.printAge()
user.customMethod()