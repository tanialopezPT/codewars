// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



// Parameters: array with multiple types of elements: num, strng, boolean


// Results: single array with same elements with 0's moved to the end; other elements remain in the same location


// Examples: 


// PseudoCode: iterate over the starting array and identify the 0s. Take the existing 0s and move them to the end of the array or count the zeros , remove them, then append the correct number of zeros to the end of the array. 

// iterate through the original array and assign each value to a new array nucket depending on it zero or not, join the buckets together. 



function moveZeros(arr) {
    let catchAll= [];
    let zeros = [];
    for (let i=0; i<arr.length; i++){
      arr[i]=== 0 ? zeros.push(arr[i]) : catchAll.push(arr[i])
      }
    
      return ([...catchAll,...zeros])
    
  }
  
  