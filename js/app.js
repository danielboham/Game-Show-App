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

const game = new Game();
//game.getRandomPhrase().addPhraseToDisplay();

game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);