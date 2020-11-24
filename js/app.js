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
        //console.log(game.activePhrase.phrase);
        }
);

//game.getRandomPhrase().addPhraseToDisplay();

// Event listener for getting button and pass key to handleInteraction ()
document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("click", event => {
        game.handleInteraction(key);
    })
})
