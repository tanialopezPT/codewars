

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.





function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let array =[age1, age2, age3, age4, age5, age6, age7, age8]
    
    return Math.floor(Math.sqrt(array.map(a=> a*a).reduce((b,c) => b+c)) /2)
    }
  