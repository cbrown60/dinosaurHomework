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
 
})