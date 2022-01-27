class VendingMachine {
  constructor(vendMichineObj) {
    this.id = vendMichineObj.id;
    this.isBroken = vendMichineObj.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snack.name) {
        return 'Sorry, that snack is already stocked! Try adding a different snack.';
      }
    }
    this.snacks.push(snack);
  }

  purchaseSnack(snack, money) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].itemsInStock === snack.itemsInStock) {
        this.snacks.splice(i, 1);
        var change = money - snack.price;
        return change;
      }
    }
  }


}

module.exports = VendingMachine;
