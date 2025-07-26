import { LightningElement } from 'lwc';

export default class RockPaperScissors extends LightningElement {
    playerChoice = '';
    computerChoice = '';
    resultMessage = 'Make your move!';
    playerScore = 0;
    computerScore = 0;
    resultClass = 'neutral';

    choices = ['Rock', 'Paper', 'Scissors'];

    getRandomChoice() {
        const rand = Math.floor(Math.random() * 3);
        return this.choices[rand];
    }

    play(choice) {
        this.playerChoice = choice;
        this.computerChoice = this.getRandomChoice();
        this.checkResult();
    }

    playRock() {
        this.play('Rock');
    }

    playPaper() {
        this.play('Paper');
    }

    playScissors() {
        this.play('Scissors');
    }

    checkResult() {
        const user = this.playerChoice;
        const cpu = this.computerChoice;

        if (user === cpu) {
            this.resultMessage = '🤝 It\'s a Draw!';
            this.resultClass = 'draw';
        } else if (
            (user === 'Rock' && cpu === 'Scissors') ||
            (user === 'Paper' && cpu === 'Rock') ||
            (user === 'Scissors' && cpu === 'Paper')
        ) {
            this.resultMessage = '🎉 You Win!';
            this.resultClass = 'win';
            this.playerScore++;
        } else {
            this.resultMessage = '💻 Computer Wins!';
            this.resultClass = 'lose';
            this.computerScore++;
        }
    }
}
