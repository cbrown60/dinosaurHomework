var Park = function(){
this.enclosure = []

}

Park.prototype = {
  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur)
  },

  removeDinosaur : function(dinosaur){
    if(this.enclosure.includes(dinosaur)){
      var position = this.enclosure.indexOf(dinosaur)
      this.enclosure.splice(position, 1)
    }
  }

}

module.exports = Park