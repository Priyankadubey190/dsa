const num = 123;

function reverseFun(num, reverse = 0) {
  if (num == 0) {
    return reverse;
  }
  let lastDigit = num % 10;
  reverse = reverse * 10 + lastDigit;
  return reverseFun(Math.floor(num / 10), reverse);
}

console.log(reverseFun(num, (reverse = 0)));
