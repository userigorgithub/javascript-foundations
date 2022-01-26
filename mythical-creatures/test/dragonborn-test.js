// CREATED BY DILLON PARKER !!!

var assert = require('chai').assert;
var Dragonborn = require('../exercises/dragonborn');
var Dragon = require('../exercises/dragon');
var Guard = require('../exercises/guard');
var Person = require('../exercises/person');

describe('Dragonborn', function() {

  it('should be a function', function() {
    assert.isFunction(Dragonborn);
  });

  it('should instatiate the hero, Dragonborn', function() {
    var dragonborn = new Dragonborn({name:'Yyeurgen'});

    assert.isObject(dragonborn);
  });

  it('should have a name', function() {
    var yyeurgen = new Dragonborn({name:'Yyeurgen'});

    assert.equal(yyeurgen.name, 'Yyeurgen');
  });

  it('should have a race, and be Nord by default', function() {
    var yyeurgen = new Dragonborn({name:'Yyeurgen'});
    var arnie = new Dragonborn({name:'Arnie', race:'Breton'});

    assert.equal(yyeurgen.race, 'Nord');
    assert.equal(arnie.race, 'Breton');
  });

  it('should be able to kill a dragon', function() {
    var yyeurgen = new Dragonborn({});
    var dragon = new Dragon();

    assert.equal(dragon.alive, true);
    yyeurgen.killDragon(dragon);
    assert.equal(dragon.alive, false);
    assert.deepEqual(yyeurgen.killDragon(dragon), 'The Dragonborn saved us all!!')
  });

  it('should be able to interact with people, given their social status', function() {
    var margo = new Person('Margo', 'merchant');

    assert.instanceOf(margo, Person);
    assert.equal(margo.socialClass, 'merchant');
  });

  it('should be able to pickpocket', function() {
    var yyeurgen = new Dragonborn({});
    var victim = new Person('Margo', 'merchant');

    assert.equal(yyeurgen.gold, 0);
    yyeurgen.pickPocket(victim);

    assert.equal(yyeurgen.gold, 100);
  });


  it('should have a different outcome for different social classes', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var hanashan = new Dragonborn({name: `Hana'Shan`, race: 'Khajiit'});
    var emma = new Person('Emma', 'peasant');
    var bernie = new Person('Bernadette', 'noble');
    var margo = new Person('Margo', 'scholar');
    var mertle = new Person('Mertle', 'merchant');

    yyeurgen.pickPocket(emma);
    assert.equal(yyeurgen.gold, 25);
    assert.deepEqual(yyeurgen.pickPocket(emma), 'Nobody suspects a thing!');
    yyeurgen.pickPocket(margo);
    assert.equal(yyeurgen.gold, 250);
    assert.equal(yyeurgen.health, 80);
    assert.deepEqual(yyeurgen.pickPocket(margo), 'OW! At least I got some scrolls to sell!');
    yyeurgen.pickPocket(mertle);
    assert.equal(yyeurgen.gold, 550);
    assert.deepEqual(yyeurgen.pickPocket(mertle), `Maybe I should stick to my day job...`);
    hanashan.pickPocket(bernie);
    assert.equal(hanashan.gold, 350);
    assert.deepEqual(hanashan.pickPocket(bernie), `I'll either get rich or die trying!`);

  });

  it('should gain varying amounts of suspicion after pickpocket', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var emma = new Person('Emma', 'peasant');
    var bernie = new Person('Bernadette', 'noble');
    var margo = new Person('Margo', 'scholar');
    var mertle = new Person('Mertle', 'merchant');

    assert.equal(yyeurgen.suspicion, 0);
    yyeurgen.pickPocket(emma);
    assert.equal(yyeurgen.suspicion, 10);
    yyeurgen.pickPocket(bernie);
    assert.equal(yyeurgen.suspicion, 50);
    yyeurgen.pickPocket(margo);
    assert.equal(yyeurgen.suspicion, 75);
    yyeurgen.pickPocket(mertle);
    assert.equal(yyeurgen.suspicion, 100);
  });

  it('should be unimprisoned by default', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    assert.equal(yyeurgen.imprisoned, false);
  });

  it('should result in imprisonment if suspicion gets too high', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var bernie = new Person('Bernadette', 'noble');

    yyeurgen.pickPocket(bernie);
    yyeurgen.pickPocket(bernie);
    yyeurgen.pickPocket(bernie);

    assert.equal(yyeurgen.imprisoned, true);
  });


  it('should result in imprisonment if pickpocketing a guard', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var theo = new Guard('Theodore', 'guard');

    yyeurgen.pickPocket(theo);
    assert.equal(yyeurgen.imprisoned, true);
  });

  it('should be able to be released for a certain amount of gold', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var jjorgen = new Dragonborn({name: 'Jjorgen'});
    var bernie = new Person('Bernadette', 'noble');
    var theo = new Guard('Theodore', 'guard');
    var margo = new Person('Margo', 'scholar');

    assert.deepEqual(yyeurgen.bribeGuard(), `You have no reason to bribe a guard!`);

    yyeurgen.pickPocket(bernie);
    yyeurgen.pickPocket(bernie);
    yyeurgen.pickPocket(margo);
    assert.equal(yyeurgen.gold, 900);
    assert.equal(yyeurgen.imprisoned, true);
    assert.deepEqual(yyeurgen.bribeGuard(), `You don't have enough money!`);

    jjorgen.pickPocket(bernie);
    jjorgen.pickPocket(bernie);
    jjorgen.pickPocket(bernie);
    jjorgen.bribeGuard();
    assert.equal(jjorgen.imprisoned, false);
    assert.equal(jjorgen.gold, 50);
  });

  it('should reset suspicion upon release', function () {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var bernie = new Person('Bernadette', 'noble');
    var theo = new Guard('Theodore', 'guard');
    var margo = new Person('Margo', 'scholar');

    yyeurgen.pickPocket(bernie);
    yyeurgen.pickPocket(bernie);
    yyeurgen.pickPocket(bernie);
    yyeurgen.bribeGuard();
    assert.equal(yyeurgen.suspicion, 0);
  });

  it('should be able to pickpocket only guard in prison', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var bernie = new Person('Bernadette', 'noble');
    var theo = new Guard('Theodore', 'guard');
    var margo = new Person('Margo', 'scholar');

    yyeurgen.pickPocket(theo);
    assert.deepEqual(yyeurgen.pickPocket(margo), `Margo isn't here right now.`);
    assert.deepEqual(yyeurgen.pickPocket(bernie), `Bernadette isn't here right now.`);
    assert.deepEqual(yyeurgen.pickPocket(theo), `Guess I'll be here a while...`);
  });

  it('should be able to gain gold/lose health when you pickpocket a guard', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var theo = new Guard('Theodore', 'guard');

    assert.equal(yyeurgen.health, 100);
    yyeurgen.pickPocket(theo);
    assert.equal(yyeurgen.health, 50);
    yyeurgen.pickPocket(theo);
    assert.equal(yyeurgen.health, 0);
  });

  it('should be alive by default, and die if health ever gets too low', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var theo = new Guard('Theodore', 'guard');

    assert.equal(yyeurgen.alive, true);
    yyeurgen.pickPocket(theo);
    yyeurgen.pickPocket(theo);
    assert.equal(yyeurgen.health, 0);
    assert.deepEqual(yyeurgen.pickPocket(theo), 'Our dear Yyeurgen has passed.');
  });

  it('should still be dead', function() {
    var jjorgen = new Dragonborn({name: 'Jjorgen'});
    var dragon = new Dragon();
    var bernie = new Person('Bernadette', 'noble');
    var theo = new Guard('Theodore', 'guard');
    var margo = new Person('Margo', 'scholar');

    jjorgen.pickPocket(bernie);
    jjorgen.pickPocket(bernie);
    jjorgen.pickPocket(bernie);
    assert.equal(jjorgen.imprisoned, true);
    jjorgen.pickPocket(theo);
    jjorgen.bribeGuard();
    jjorgen.pickPocket(margo);
    jjorgen.pickPocket(margo);
    jjorgen.pickPocket(margo);
    assert.deepEqual(jjorgen.killDragon(), 'Our dear Jjorgen has passed.');
    assert.deepEqual(jjorgen.joinGuild('thieves'), 'Our dear Jjorgen has passed.');
    assert.deepEqual(jjorgen.bribeGuard(), 'Our dear Jjorgen has passed.');
  });


  it('should be able to join a guild', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});

    yyeurgen.joinGuild('thieves');

    assert.deepEqual(yyeurgen.guilds, ['thieves']);
  });

  it('should only be able to join a guild once', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});

    yyeurgen.joinGuild('mages');
    yyeurgen.joinGuild('mages');

    assert.equal(yyeurgen.guilds.length, 1);
  });

  //Pracite writing a test suite, or move on to Guard
  it.skip('should be thrown out of guild if victim is also in guild', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});

  });
});


describe('Guard', function() {
  it('should be able to be a newbie or veteran guard', function() {
    var theo = new Guard('Theodore', 'guard');

    assert.equal(theo.rank, 'newbie');
    assert.equal(theo.arrowToTheKnee, false);
    theo.toBattle();
    theo.toBattle();
    assert.equal(theo.rank, 'newbie');
    assert.deepEqual(theo.exist(), "Let me guess... Someone stole your sweetroll?");
    theo.toBattle();
    assert.equal(theo.rank, 'veteran');
    assert.equal(theo.arrowToTheKnee, true);
    assert.deepEqual(theo.exist(), "I used to be an adventurer like you, until I took an arrow to the knee.");
  });
});
