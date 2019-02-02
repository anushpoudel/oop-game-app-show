/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase, artist){
        this.phrase = `${phrase.toLowerCase()}`;
        this.artist = artist;

    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const hint = document.querySelector('#hint');
        hint.innerHTML = `<strong>HINT</strong>:   Artist/Band ~ ${this.artist}`;

        const lettersOfPhrase = this.phrase.split('');
        const ul = document.querySelector('#phrase ul');
        let li = '';

        lettersOfPhrase.forEach((letter) => {
            li = document.createElement('li');
            li.textContent = letter;
            if (letter !== ' '){
                li.className = `hide letter ${letter}`;
            } else {
                li.className = `space`;
            }
            ul.appendChild(li);

        });

    };

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if (this.phrase.split('').includes(letter)){
            return true;
        } else {
            return false;
        }
    };


    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter){
        const selectedLetter = document.querySelectorAll(`.${letter}`);

        selectedLetter.forEach((value) => {
           value.className = `show letter ${letter}`;
        })

    }



}




