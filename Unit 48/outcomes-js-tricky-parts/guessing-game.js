function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let isOver = false;
    let numGuesses = 0;

    return function guess(num) {
        if (isOver) {
            return "You won game over!"
        }
        numGuesses++
        if (num === answer) {
            isOver = true;
            const guess = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${numGuesses}`
        }
        if (num < answer) {
            return `${num} is too low`
        }
        if (num > answer) {
            return `${num} is too high`
        }
    }
}

module.exports = { guessingGame };
