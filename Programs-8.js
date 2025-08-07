// 1. Write a program that checks if a given number is prime.

function checkPrimeNum(a) {
  const nsqr = Math.sqrt(a);
  if (a <= 1) {
    console.log('False');
    return false;
  } else {
    for (let i = 2; i <= nsqr; i++) {
      if (a % i === 0) {
        console.log('False');
        return false;
      }
    }
    console.log('True');
    return true;
  }
}
// checkPrimeNum(7)

// ------------Test-Cases------------

function testPrime() {
  let num = 10;
  const expected = true;
  const res = checkPrimeNum(num);

  if (res === expected) {
    console.log('success');
  } else {
    console.log('flop');
  }
}
// testPrime()
