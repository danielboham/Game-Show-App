/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.getElementById('btn__reset')
        .addEventListener("click", event => {
        game.startGame()
        }
);

// Event listener for getting button and pass key to handleInteraction()
document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("click", event => {
        game.handleInteraction(key);
    })
})
