

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.





function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let array =[age1, age2, age3, age4, age5, age6, age7, age8]
    
    return Math.floor(Math.sqrt(array.map(a=> a*a).reduce((b,c) => b+c)) /2)
    }
  

  
  
    // Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

    // (In this case, all triangles must have surface greater than 0 to be accepted).
    
  
  
    function isTriangle(a,b,c)
{
   return a+b>c && c+b >a && a+c > b}


   
//    Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
   
   function XO(str) {
    
    let x= str.split("").includes("x");
    let o= str. split("").includes("o");
    
    if (x === o) {return true;}
    else {return false;}
    

        function XO(str) {
        return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
    }

  }
  


//   Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2



function angle(n) {

  return 180*(n-2);
}
