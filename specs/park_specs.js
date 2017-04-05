var assert = require('assert')
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js')

describe('Park', function () {
  var dinosaur
  var park

  beforeEach(function(){
    dinosaur = new Dinosaur('T-Rex', 3)
    park = new Park()
  })

  it('enclosure is empty', function(){
    assert.strictEqual(0,park.enclosure.length)
  })

  it('can add a dinosaur to the enclosure', function(){
    park.addDinosaur(dinosaur)
    assert.strictEqual(1, park.enclosure.length)
  })

  it('can remove dinosaur', function(){
  park.addDinosaur(dinosaur)
  park.removeDinosaur(dinosaur)
  assert.strictEqual(0, park.enclosure.length)
  }),

  it('can remove dinosaur by type', function(){
  park.addDinosaur(dinosaur)
  var dinosaur2 = new Dinosaur("diplodocus", 6)
  park.addDinosaur(dinosaur2)
  park.removeDinosaur(dinosaur2)
  assert.strictEqual(1, park.enclosure.length)
  })

  it('return dinosaurs with average babie over 2', function(){

    park.addDinosaur(dinosaur)
    var dinosaur3 = new Dinosaur("big dino", 6)
    park.addDinosaur(dinosaur3)
    var dinosaur4 = new Dinosaur("small dino", 1)
    park.addDinosaur(dinosaur4)
    var dinosaur5 = new Dinosaur("little dino", 1)
    park.addDinosaur(dinosaur5)
    var dinosaur6 = new Dinosaur("medium dino", 4)
    park.addDinosaur(dinosaur6)
    assert.strictEqual(3, park.moreThanTwo(park))

  })
 
})