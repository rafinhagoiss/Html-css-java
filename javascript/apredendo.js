function isSquare(n) {
    return n >= 0 && Number.isInteger(Math.sqrt(n));
  }
  console.log(isSquare(-1));  // false
  console.log(isSquare(0));   // true
  console.log(isSquare(3));   // false
  console.log(isSquare(4));   // true
  console.log(isSquare(25));  // true
  console.log(isSquare(26));  // false  