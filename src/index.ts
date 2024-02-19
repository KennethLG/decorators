import { configurable } from "./accessorDecorator";
import { addCustomMethod } from "./classDecorator";
import { logMethod, withPrefixedLog } from "./methodDecorator";
import { LogParameter, logMethodParameters } from "./paramDecorator";
import { isEmail } from "./propertyDecorator";

interface UserWithCustomMethod extends User {
  customMethod(): void;
}
@addCustomMethod('My custom method return value')
class User {

  @isEmail
  email = 'orsonleiziaga@clovertales.com'

  constructor(private _name: string, private age: number) {}

  @logMethod
  greet() {
    console.log(`Hello, my name is ${this._name}.`);
  }

  @withPrefixedLog('AGE:')
  printAge() {
    console.log(`I am ${this.age} years old`);
  }

  say(@LogParameter message: string) {
    console.log(message)
    logMethodParameters(User.prototype, 'say')
  }

  @configurable(false)
  get name() {
    return this._name
  }
}



const user = new User('Kenneth', 4000) as UserWithCustomMethod
user.greet()
user.printAge()
user.customMethod()
user.say('hello world')