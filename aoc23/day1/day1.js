const fs = require('fs');
const input = fs.readFileSync('day1.input.js', 'utf8');

// Part 1
const lines = input.split('\n');
let puzzle1Answer = 0;

lines.forEach(line => {
    const numbersOnly = line.replace(/[^0-9]/g, '');
    const firstDigit = numbersOnly[0];
    const lastDigit = numbersOnly[numbersOnly.length - 1];
    puzzle1Answer += parseInt(`${firstDigit}${lastDigit}`);
});

console.log(`Puzzle 1 answer: ${puzzle1Answer}`);

// Part 2
let puzzle2Answer = 0;
const numberElements = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const numberFromWord = (word) => {
    if (parseInt(word)) return parseInt(word);
    return numberElements.indexOf(word);
}

lines.forEach((line) => {
    let foundElements = [];
    numberElements.forEach((element) => {
        // Find all instances of element in line
        for (var i = 0; i < line.length; i++) {
            if (line.substring(i, i + element.length) === element) {
                foundElements[i] = numberFromWord(element);
            }
        }
    });

    foundElements = foundElements.filter((element) => element !== undefined);

    const firstDigit = foundElements[0];
    const lastDigit = foundElements[foundElements.length - 1];
    puzzle2Answer += parseInt(`${firstDigit}${lastDigit}`);
});

console.log(`Puzzle 2 answer: ${puzzle2Answer}`);
