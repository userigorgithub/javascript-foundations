class Centaur {
  constructor(centaurObject) {
    this.name = centaurObject.name;
    this.breed = centaurObject.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  }

  shootBow() {
    this.counter++;
    if (this.counter >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!'
    }
    return 'Twang!!!';
  }

  run() {
    this.counter++;
    if (this.counter >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!'
    }
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.layingDown) {
      this.cranky = false;
      this.counter = 0;
      return 'ZZZZ';
    }
    return 'NO!'
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  
  drinkPotion() {
    this.cranky = false;
    this.standing = true;
    if (this.standing) {
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;
