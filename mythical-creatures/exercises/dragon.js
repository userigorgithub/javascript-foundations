class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.full = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.full++;
    if (this.full >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
