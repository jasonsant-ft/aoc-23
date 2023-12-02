const fs = require('fs');
const input = fs.readFileSync('day2.input.js', 'utf8');

// Part 1
const games = input.split('\n');
let puzzle1Answer = 0;
const maximums = { red: 12, green: 13, blue: 14 };

games.forEach((game, i) => {
    const gameNumber = i + 1;
    const sets = game.split(':')[1].split(';');
    let gameIsValid = true;

    sets.forEach((set) => {
        const colors = set.split(',');
        colors.forEach((color) => {
            const colorName = color.trim().split(' ')[1];
            const colorAmount = parseInt(color.trim().split(' ')[0]);
            if (colorAmount > maximums[colorName]) {
                gameIsValid = false;
            }
        });
    });

    if (gameIsValid) {
        puzzle1Answer += gameNumber;
    }
});
console.log(`Puzzle 1 answer: ${puzzle1Answer}`);

// Part 2
let puzzle2Answer = 0
games.forEach((game) => {
    const sets = game.split(':')[1].split(';');
    const biggestNumbers = { red: 0, green: 0, blue: 0 };

    sets.forEach((set) => {
        const colors = set.split(',');
        colors.forEach((color) => {
            const colorName = color.trim().split(' ')[1]?.replace('`', '')
            const colorAmount = parseInt(color.trim().split(' ')[0]);
            biggestNumbers[colorName] = colorAmount > biggestNumbers[colorName] ? colorAmount : biggestNumbers[colorName];
        });
    });

    puzzle2Answer += (biggestNumbers.red * biggestNumbers.green * biggestNumbers.blue);
});

console.log(`Puzzle 2 answer: ${puzzle2Answer}`);
