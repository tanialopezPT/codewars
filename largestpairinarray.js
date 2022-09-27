

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)


function largestPairSum (n) {
  
    n.sort((a,b) => b-a);
   return (n[0] + n[1]);
   
 }

 //sort from largest to smallest, then add index 0 and 1. 