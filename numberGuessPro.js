import { LightningElement } from 'lwc';

export default class NumberGuessPro extends LightningElement {
    userGuess = '';
    message = 'Start guessing a number!';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessHistory = [];
    resultClass = 'neutral';

    handleInput(event) {
        this.userGuess = event.target.value;
    }

    checkGuess() {
        const guess = parseInt(this.userGuess, 10);
    
        if (isNaN(guess) || guess < 1 || guess > 100) {
            this.message = '🚫 Please enter a number between 1 and 100.';
            this.resultClass = 'error';
            return;
        }
    
        this.guessHistory.push({
            id: Date.now() + Math.random(), // unique key
            value: guess
        });
    
        if (guess === this.randomNumber) {
            this.message = `🎉 Correct! You guessed it in ${this.guessHistory.length} attempt(s)!`;
            this.resultClass = 'success';
        } else if (guess < this.randomNumber) {
            this.message = '📉 Too low. Try again!';
            this.resultClass = 'low';
        } else {
            this.message = '📈 Too high. Try again!';
            this.resultClass = 'high';
        }
    }
    

    resetGame() {
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        this.userGuess = '';
        this.guessHistory = [];
        this.message = 'New game started. Make your guess!';
        this.resultClass = 'neutral';
    }
}
