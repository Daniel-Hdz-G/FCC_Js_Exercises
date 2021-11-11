/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.      */


function smallestCommons(arr) {
    var limMin = arr[0]
    var limMax = arr[1]
    var list = []
    var maximumMultiple = 1
    
    /*************************TO CREATE FULL ARRAY**************************
     * Out first step is to check wich value is bigger, so we can create
     * later a list with those limits.                                    */
    if(arr[0] > arr[1]){
      limMin = arr[1]
      limMax = arr[0]
    }
    /*With our limits defined we fill the list array with all the numbers in 
    our work range. At the same time, we need to multiply every number to 
    get the highest reachable multiple with all our set of values. This is 
    going to work as our limit, as his name says */
    for (let i = limMin; i <= limMax; i++) {
        list.push(i);
        maximumMultiple *= i
    }

    /*Our final step before begin is to count the number of values that we 
    have into our array */
    const divisors = list.length
    
    /**********************************************************************/
    
    /*So, the highest number of our array will determine the minimum multiple. 
    We're going to increase with this value each iteration                  */ 
    for (let x = limMax; x <= maximumMultiple; x += limMax) {


        /*For every value into our array, we're going to check if we can divide
        our current multiple x. In this case, the divisorCheck variable will increase
        by one.
        NOTE: At this point divisorCheck will reset to 0, because if the value of x
        increase for the next loop, it has to check every value again.             */
        let divisorCheck = 0
        for(let y = limMin; y <= limMax; y++){
          if(x % y === 0){
            divisorCheck += 1
          }
        }
        
        /*If the divisorCheck variable it's equal to divisors, that means that
        our multiple can be divided by every number inside our array.  
        We've found our SMC                                                    */
        if( divisorCheck == divisors){
          return x
        } 
    
    }  
      return 0;
    }
    
    
    smallestCommons([1,5]); //Test Input Value