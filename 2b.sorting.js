const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a list of numbers separated by spaces: ", (input) => {
  const numbers = input.split(' ').map(Number);
  const sortedNumbers = sortArrayDescending(numbers);
  console.log("Sorted array in descending order: " + sortedNumbers.join(' '));
  rl.close();
});

function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a);
}

