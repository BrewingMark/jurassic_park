const Park = function(name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  this.dinosaurs.splice(dinosaur);
};

Park.prototype.findDionsaursOfSpecies = function (species) {
  const filteredDinosaurs = this.dinosaurs.filter(this.species === species);
  return filteredDinosaurs;
}; // Not quite getting how filter() works but beleive it is what I should use.
// Strugling when it comes to accessing values in nested arrays.

Park.prototype.findMostGuestsAttracted = function () {
  let mostGuests = 0;
  let currentHighest;
  for (var i = 0; i < this.dinosaurs.length; i ++) {
    if (mostGuests < this.guestsAttractedPerDay) {
      mostGuests = this.guestsAttractedPerDay;
      currentHighest = this.dinosaurs[i];
    }
  }
  return currentHighest;
}; // I know what I'm trying to do and think I'm on the right track but can\t get it
// to work.

Park.prototype.totalDailyVisits = function () {
  // I want to iterate through dinosaurs and total the visitors attracted for all.
};

Park.prototype.totalAnnualVisits = function () {
  // I want to iterate through dinosaurs and total the visitors attracted for all by
  // day and multiply it by the number of days in the year. (Use above function for dryness?)
};

Park.prototype.totalAnnualRevenue = function () {
  // I want the total annual visits multiplyed by the ticket price
};

module.exports = Park;
