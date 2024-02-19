class User {
  constructor(private name: string, private age: number) {}

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  printAge() {
    console.log(`I am ${this.age} years old`);
  }
}

const user = new User('Kenneth', 4000)
user.greet()
user.printAge()