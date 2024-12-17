const numbers = [5, 3, 20, -11, 7, -11, 33];

const rightNumbers = numbers.sort((a, b) => a - b);

const numbersResult = new Set(numbers)

console.log(numbersResult);