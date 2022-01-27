class Roadrace {
  constructor(roadRaceObj) {
    this.name = roadRaceObj.title;
    this.location = roadRaceObj.city;
    this.distance = 0;
    this.participants = [];
  }

  setDistance(miles) {
    this.distance += miles;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }

  registerParticipants(participant) {
    this.participants.push(participant);
  }

  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].completedRaces = this.name;
      this.participants[i].milesRun = this.distance;
    }
  }
}

module.exports = Roadrace;
