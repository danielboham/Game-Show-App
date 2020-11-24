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
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }
    startGame() {
        //Target div with overlay id and hide by setting style on display - none.
        const overlay = document.getElementById('overlay');
        overlay.style.display = "none";

        // Store random phrase tot active phrase
        this.activePhrase = this.getRandomPhrase();
        // call addPhraseToDisplay with activePhrase value
        this.activePhrase.addPhraseToDisplay();
        // test
        this.activePhrase.checkLetter();
        // test
        //this.activePhrase.showMatchedLetter();

    }
    checkForWin() {
        // Get all elements with class hide..
        let win = document.getElementsByClassName("hide ");
        console.log(win);
        // Conditional if the length of the HTML collection is > 0
        if(win.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    removeLife() {
        // By calling this method increase this.missed by 1
        this.missed += 1;
        // Target the first element with img liveHeart
        let lives = document.querySelector('img[src="images/liveHeart.png"]');
        // Condition for missed attempts change first found element to lostHeart
        if (this.missed < 5) {
            lives.src = "images/lostHeart.png";
        } else if (this.missed === 5) {
            this.gameOver(false);
        }
        //console.log(this.missed);
    }
    gameOver(boolean) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = "flex";
        let gameOverMessage = document.querySelector('#game-over-message');

        if(boolean === false) {
            overlay.setAttribute("class", "lose");
            gameOverMessage.innerHTML = "Better luck next time!";
        } else if (boolean === true) {
            overlay.setAttribute("class", "win");
            gameOverMessage.innerHTML = "Yes you are a winner!";
        }
    }
}

