class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust = 11;
  }

  believe() {
    this.dust = 20;
  }

  makeDresses(dressesArr) {
    for (var i = 0; i < dressesArr.length; i++) {
      this.clothes.dresses.push(dressesArr[i]);
    }
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition = 'Vengeful' && this.humanWards.length < 2) {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
      return infant;
    } else {
      this.disposition = 'Good natured';
    }
  }
}

module.exports = Fairy;
