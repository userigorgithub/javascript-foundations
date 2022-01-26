// var Person = require('./person');
// var Statue = require('./statue');

var Person = require('../exercises/person');
var Statue = require('../exercises/statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    var statue = new Statue(victim.name);
    if (this.statues.length === 3) {
      var firstVictim = this.statues.shift();
      firstVictim = new Person(firstVictim.name);
      this.statues.push(statue);
      firstVictim.mood = 'relieved';
      return firstVictim;
    } else {
    this.statues.push(statue);
    }
  }

  // gazeAtVictim(victim) {
  //   if (this.statues.length < 3) {
  //     this.statues.push(new Statue(victim.name));
  //
  //   } else if (this.statues.length === 3) {
  //     this.statues.push(new Statue(victim.name));
  //     var firstVictim = this.states.shift();
  //     firstVictim = new Person(firstVictim.name);
  //     firstVictim.mood = 'relieved';
  //     return firstVictim;
  //   }
  // }

  // gazeAtVictim() {
  //   if (this.statues.length >= 3) {
  //     var firstVictim = this.states.shift();
  //     firstVictim = new Person(firstVictim.name);
  //     firstVictim.mood = 'relieved';
  //   }
  //   this.statues.push(new Statue(victim.name));
  //   return firstVictim;
  // }
}

module.exports = Medusa;
