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
        const array = [
            { phrase: "this is phrase 1"},
            { phrase: "this is phrase 2"},
            { phrase: "this is phrase 3"},
            { phrase: "this is phrase 4"},
            { phrase: "this is phrase 5"}
        ]
        return array;
    }
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }
}
