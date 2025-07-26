import { LightningElement } from 'lwc';

export default class NumberGuessGame extends LightningElement {
    userGuess = '';
    message = '';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    handleInput(event) {
        this.userGuess = event.target.value;
    }

    checkGuess() {
        const guess = parseInt(this.userGuess, 10);
        this.attempts++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            this.message = '🚫 Please enter a number between 1 and 100.';
            return;
        }

        if (guess === this.randomNumber) {
            this.message = `✅ Correct! You guessed it in ${this.attempts} attempt(s). 🎉`;
            this.resetGameAfterDelay();
        } else if (guess < this.randomNumber) {
            this.message = '📉 Too low! Try again.';
        } else {
            this.message = '📈 Too high! Try again.';
        }
    }

    resetGameAfterDelay() {
        setTimeout(() => {
            this.randomNumber = Math.floor(Math.random() * 100) + 1;
            this.userGuess = '';
            this.attempts = 0;
            this.message = 'New number generated! Try guessing again.';
        }, 4000);
    }
}
