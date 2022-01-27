class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }

  useMaterial(amount) {
      if (this.amount >= amount) {
        this.amount -= amount;
        return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
      }
      amount -= this.amount;
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
  }

  calculateMaterialCost() {
    return this.price * this.amount;

    // var cost = this.price * this.amount;
    // return cost;
  }
}

module.exports = Material;
