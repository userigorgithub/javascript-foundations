class TrickOrTreater {
  constructor(costumeObj, bagObj) {
    this.dressedUpAs = costumeObj.style;
    this.bag = bagObj;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.bag.candies.push(candy);
    this.hasCandy = true;
    this.countCandies++;
    this.bag.count = this.countCandies;
  }

  eat() {
    this.countCandies--;
    this.bag.candies.shift();
  }
}

module.exports = TrickOrTreater;
