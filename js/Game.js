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
}

