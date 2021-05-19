// (c) Consider the following class:

class Multiplier {
  constructor() {
    this.count = 1;
  }
  increment() {
    this.count = this.count + 1;
  }
  apply(x) {
    return this.count * x;
  }
}

// What would the following code fragment print?
// 5, 15
let multiplier = new Multiplier();
console.log(multiplier.apply(5));
multiplier.increment();
multiplier.increment();
console.log(multiplier.apply(5));
