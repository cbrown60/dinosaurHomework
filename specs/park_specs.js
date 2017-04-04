var assert = require('assert')
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js')

describe('Park', function () {
  var dinosaur
  var park

  beforeEach(function(){
    dinosaur = new Dinosaur('T-Rex', 2)
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


 
})