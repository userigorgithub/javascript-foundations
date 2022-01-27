class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }

  runSomeMiles(miles) {
    this.milesRun += miles;
    this.fitness = this.fitness + this.milesRun;
  }

  stretch() {
    this.fitness += 0.5;
  }

  runRace(name, num) {
    this.completedRaces.push(name);
    // this.milesRun += num;
    // this.fitness += num;
    // OR more correct:
    this.runSomeMiles(num);
  }
}

module.exports = Runner;
