/* Game.js Phrase Hunter */

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
            new Phrase("Would you like 3 some Heineken")
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
    }
    checkForWin() {
        // Get all elements with class hide..
        let win = document.getElementsByClassName("hide ");
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
    }
    gameOver(boolean) {
        const overlay = document.getElementById('overlay');
        // Put display from none to flex
        overlay.style.display = "flex";
        let gameOverMessage = document.querySelector('#game-over-message');

        if(boolean === false) {
            overlay.setAttribute("class", "lose");
            gameOverMessage.innerHTML = "Better luck next time!";
            this.resetGame();
        } else if (boolean === true) {
            overlay.setAttribute("class", "win");
            gameOverMessage.innerHTML = "Yes you are a winner!";
            this.resetGame();
        }
    }
    handleInteraction(key) {
        // Disable key after Event listener click (see app.js)
        key.disabled = true;
        // Catch letter
        const letter = key.innerHTML;
        if(this.activePhrase.checkLetter(letter) === true) {
            key.setAttribute("class", "chosen");
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin() === true) {
                this.gameOver(true);
            }
        } else {
            key.setAttribute("class", "wrong");
            this.removeLife();
        }
    }
    resetGame(){
        // Target ul element and identify which ul element it concerns
        let ull = document.querySelectorAll('ul');
        let ul = ull[0];
        // To loop through convert to array
        let ulc = Array.from(ul.children);
        ulc.forEach(ulc => {
            ul.removeChild(ulc);
        })
        // Target keys, loop through them and change class
        let keys= document.querySelectorAll('#qwerty button');
        keys.forEach(key => {
            key.setAttribute("class", "key");
            key.disabled = false;
        })
        // Target heart img, loop through them and change scr
        let lives = document.querySelectorAll('#scoreboard img');
        lives.forEach(lives => {
            lives.src = "images/liveHeart.png";
        })
    }
}

