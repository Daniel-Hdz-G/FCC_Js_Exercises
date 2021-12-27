/*Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.*/



function palindrome(str) {
    //Firstly, we create a simple regex that will help us to filter the given string. This will only contain letters and numbers. 
    let myRex = /[^a-zA-Z0-9]*/ig
    /*
    We create two variables were we're going to do a very similar treatment. 
    We need to remove all not allowed symbols, that's why we use the replace method. After that, let's work with lowercase for ease.

    The only difference between these two strings is that one of them is going to be backwards. 
    */
    let newStr = str.replace(myRex,'').toLowerCase()
    let revStr = str.replace(myRex,'').toLowerCase().split('').reverse().join('');
  
    /*Finally, we compare every element from both strings, in the same order. As one of them is reversed, if the symbol 
    (letter or number) isn't the same, we can conclude that is not a palindrome. Therefore, return false.  */
  
    for(let i = 0; i<=newStr.length;i++){
      if (newStr[i]!==revStr[i])
            return false
    }
    /*If the cycle completes smoothly, then we get true. Our given string is a palindrome!*/ 
  return true
  
  }
  
  palindrome("Never odd or even");
  //True
