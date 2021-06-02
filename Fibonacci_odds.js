/*
This exercise must return the add from all the odd numbers
before the parameter
*/

function sumFibs(num) {
let currentValue = 1,
    pastValue = 0,
    total = 0;

while (currentValue <= num) {
    if (currentValue % 2 !== 0) {
      total += currentValue;
    }
    currentValue += pastValue;
    pastValue = currentValue - pastValue;
  }

  return total;
}

sumFibs(4);
