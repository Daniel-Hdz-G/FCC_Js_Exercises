/*
    We need to write a function to sum every prime number that are less than or equal to the number given. 
*/ 

function sumPrimes(num) {
    
    //We created a function to help us to check if a number is prime 
    function primeCheck(num) {
        //We start with i = 2 because 1 is not a prime number.
        //Our limit is the square root because it is the largest possible divisor for the given number.
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality, looping over all values in our range. 
    // If the helper function, primeCheck, returns true, then the sum variable will be increased with that value. 
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (primeCheck(i))
        sum += i;
    }
    return sum;
  }

  sumPrimes(10);   //= 17 [2+3+5+7]

