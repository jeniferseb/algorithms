//Sorted Union
//
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//
//Check the assertion tests for examples.




function uniteUnique(arr1, arr2, arr3) {
  
  var answer = []
  
  for(var i = 0; i < arguments.length; i++) {
    var thisArr = arguments[i];
    
    for(var j = 0; j < thisArr.length; j++) {
      var thisArrEach = thisArr[j]
      
      if(answer.indexOf(thisArrEach) < 0) {
        answer.push(thisArrEach)
      }
    }
   
  }
  return(answer)
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);