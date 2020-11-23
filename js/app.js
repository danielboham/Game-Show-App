/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*
const phrase = new Phrase("Hello Does This Work?");
console.log(`${phrase.phrase}`);
phrase.addPhraseToDisplay();
*/

/*
const game = new Game();
game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
*/
/*
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase());
*/

//const game = new Game();
//game.getRandomPhrase().addPhraseToDisplay();
//game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


const game = new Game();

document.getElementById('btn__reset')
        .addEventListener("click", event => {
        game.startGame()
        console.log(game.activePhrase.phrase);
        }
);

//game.getRandomPhrase().addPhraseToDisplay();


// select letter
// Creates an array of HTML object
const test = Array.from(document.getElementsByClassName('key'));
// Add event listener for selecting letter
test.forEach(letter => {
        letter.addEventListener("click", event => {
                let value = letter.innerHTML;
                let currentPhrase = document.getElementById('phrase');
                // target the ul element in currentPhrase
                let phraseUL = currentPhrase.firstElementChild;
                // convert phraseUL to an array
                // SEE Guide! string as parameter!!!

                // targetten in de DOM, een array van maken en dan use filter to check if letter is in phrase?
        })

})


