/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase('Wish you were here', 'Pink Floyd'),
            new Phrase('Comfortably Numb', 'Pink Floyd'),
            new Phrase('Stairway to Heaven', 'Led Zeppelin'),
            new Phrase('Kashmir', 'Led Zeppelin'),
            new Phrase('Still Loving You', 'Scorpions'),
            new Phrase('Wind of Change', 'Scorpions'),
            new Phrase('Bohemian Rhapsody', 'Queen'),
            new Phrase('Somebody to Love', 'Queen'),
            new Phrase('Dont stop me now', 'Queen'),
            new Phrase('My Way', 'Frank Sintara')
        ];

        return phrases;
    };

    /*
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * Math.floor(this.phrases.length))];
//        return selectedPhraseObject;
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        $('#overlay').hide();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        let count = 0;
        const allListItems = document.querySelectorAll('.letter');
        allListItems.forEach((li) => {
            if (!li.classList.contains(`show`) ) {
                count++;
            }

        });
        if (count == 0){
            return true;
        } else {
            return false;
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const images = document.querySelectorAll('.tries');

        for(let i=0; i< images.length; i++){

            if (images[i].firstElementChild.className !== 'lostlife'){

                images[i].firstElementChild.src = "images/lostHeart.png";
                images[i].firstElementChild.className = 'lostlife';

                this.missed+=1;
                if (this.missed == 5){
                    this.gameOver(false);
                }

                break;
            }

        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        $('#overlay').show();
        if (gameWon == true){
             document.querySelector('#overlay h1').textContent = 'Great! You guessed it right.';
            document.querySelector('#overlay').className = 'win';
        } else if (gameWon == false){
            document.querySelector('#overlay h1').innerHTML = `Oops! Better luck next time.<br>The song was: ${this.activePhrase.phrase.toUpperCase()} ~ ${this.activePhrase.artist.toUpperCase()}`;
            document.querySelector('#overlay').className = 'lose';

        }

    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent)){
            button.className = `chosen`;
            this.activePhrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()){
                this.gameOver(true);
            }

        } else {
            button.className = `wrong`;
            this.removeLife();
        }

    };
}
