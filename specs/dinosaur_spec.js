var assert = require('assert')
var Dinosaur = require('../dinosaur.js')

describe('Dinosaur', function(){

var dinosaur

beforeEach(function(){
  dinosaur = new Dinosaur('T-Rex', 2)
})

it('has a type', function(){
  assert.strictEqual('T-Rex', dinosaur.type)
})

it('number of babies', function(){
  assert.strictEqual(2, dinosaur.offspringPerYear)
})

})