class Snack {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.itemsInStock = 0;
  }

  stockItems(number) {
    this.itemsInStock += number;
  }

  removeItem() {
    if (this.itemsInStock > 0) {
      this.itemsInStock--;
      return `Item taken! There are now ${this.itemsInStock} items left.`
    }
    return `Sorry, no ${this.name} left in stock!`
  }
}

module.exports = Snack;
