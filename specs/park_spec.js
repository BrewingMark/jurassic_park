const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 30);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 30);
  });

  describe('dinosaurs', function(){

    beforeEach(function(){
      dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
      dinosaur2 = new Dinosaur('triceratops', 'herbivore', 40);
    })

    it('should have a collection of dinosaurs', function(){
      const actual = park.dinosaurs;
      assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a dinosaur to its collection', function(){
      park.addDinosaur(dinosaur);
      park.addDinosaur(dinosaur2);
      const actual = park.dinosaurs;
      assert.deepStrictEqual(actual, [dinosaur, dinosaur2])
    });

    it('should be able to remove a dinosaur from its collection', function(){
      park.addDinosaur(dinosaur);
      park.removeDinosaur(dinosaur);
      const actual = park.dinosaurs;
      assert.deepStrictEqual(actual, []);
    });

    xit('should be able to find the dinosaur that attracts the most visitors', function(){
      park.addDinosaur(dinosaur);
      park.addDinosaur(dinosaur2);
      const actual = park.findMostGuestsAttracted;
      assert.strictEqual(actual, dinosaur)
    });

    xit('should be able to find all dinosaurs of a particular species', function(){
      park.addDinosaur(dinosaur);
      park.addDinosaur(dinosaur2);
      const actual = park.findDionsaursOfSpecies('t-rex')
      assert.deepStrictEqual(actual, dinosaur)
    });

  })

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
