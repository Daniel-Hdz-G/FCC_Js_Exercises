function fearNotLetter(str) {
  //We create a For loop to check every element on string
  for (var i = 0; i < str.length; i++) {
    var asciiNum = str.charCodeAt(i);
    //We need to get the char value from every letter
    if (asciiNum !== str.charCodeAt(0) + i) {
      return String.fromCharCode(asciiNum - 1);
    }
  }
  /*If every letter is in the string, we return undefined
    because there is no missing letter*/
  return undefined;
}

console.log(fearNotLetter("hijklmnp"));