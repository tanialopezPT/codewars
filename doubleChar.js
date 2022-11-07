
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    return str.split('').map( c=> c+c).join("");
  }
  



  function TonyHawkCharacter(myBoard,myShoes,myShirt,myBinding){

  this.board=myBoard
  this.shoes=myShoes
  this.shirt=myShirt
  this.binding=myBinding

  this.skate=function(){
      alert('wow')

  }

  this.trick=function(){
      alert('you did it')
  }

  this.grab=function(){
      alert('melon grab')
  }

  let skateRamp = new tonyHawk('birdhouse', 'nike', 'quicksilver', 'goofy')