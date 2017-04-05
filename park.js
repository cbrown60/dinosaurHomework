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
  },

  // moreThanTwo : function(park){
  //   var totalOver2 = 0
  //   for(var dinosaur of park.enclosure){
  //     if(dinosaur.offspringPerYear > 2){
  //       return totalOver2 += 1
  //     }

  //   }
  // }

moreThanTwo :function(){
  var count = 0;
  for(var i = 0; i < park.length; ++i){
      if(park[i] > 2)
          count++;
  }
  
}
}

module.exports = Park

// calculateGross : function(shoppingBasket){
//   var total =0
//   for(var item of shoppingBasket.items){
//     total += item.price
//   }
//   return total 