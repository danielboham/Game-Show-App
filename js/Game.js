/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    createPhrases() {
        // an array that consists of objects
        const array = [
            new Phrase("Tulips from Holland"),
            new Phrase("Open air museum Rome"),
            new Phrase("The beaches of spain"),
            new Phrase("The city of Love"),
            new Phrase("Would you like some Heineken")
        ]
        return array;
    }
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }
    startGame(){
        //Target div with overlay id and hide by setting style on display - none.
        const overlay = document.getElementById('overlay');
        overlay.style.display = "none";

        // Store random phrase tot active phrase
        this.activePhrase = this.getRandomPhrase();
        // call addPhraseToDisplay with activePhrase value
        this.activePhrase.addPhraseToDisplay();
        // test
        this.activePhrase.checkLetter();
    }
    handleInteraction(){

    }
}

