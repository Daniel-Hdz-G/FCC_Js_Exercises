/*Given the array arr, iterate through and remove each element starting from the first element 
(the 0 index) until the function func returns true when the iterated element is passed through it. */

function dropElements(arr, func) {


    /*We need to check the func output with the 0-index value*/
    for (let i = 0; i = arr.length; i++){
      if(func(arr[0])){
        return arr
      }
      /*If our condition isn't True yet, the value on 0 index will be removed
      and the loop starts again*/
      arr.shift()
    }
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });