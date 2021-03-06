// class Person {
//   name = 'Victor';

//   constructor() {
//     this.age = 36;
//   }
//   greet() {
//     console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.')
//   }
// }

function Person() {
  this.age = 36;
  this.name = 'Victor';
  this.greet = function() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  }
};

const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__);