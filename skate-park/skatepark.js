class SkatePark {
  constructor(skateParkObj) {
    this.name = skateParkObj.name;
    this.yearFounded = skateParkObj.year;
    this.style = skateParkObj.type;
    this.features = skateParkObj.features;
    this.isPrivate = skateParkObj.isPrivate || false;

    // if (skateParkObj.isPrivate) {
    //   this.isPrivate = skateParkObj.isPrivate;
    // } else {
    //   this.isPrivate = false;
    // }

    this.cost = skateParkObj.price || 0;

    // if (skateParkObj.price) {
    //   this.cost = skateParkObj.price;
    // } else {
    //   this.cost = 0;
    // }

    this.occupants = [];
  }

  admit(skater) {
    if (this.occupants.length >= 3) {
      return 'Sorry, we are at max capacity. Thank you for understanding.'
    } else if (!this.isPrivate) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    } else if (this.cost <= skater.money) {
      skater.money -= this.cost;
      this.occupants.push(skater);
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else {
      return 'Sorry, you don\'t have enough money.'
    }
  }
}

module.exports = SkatePark;
