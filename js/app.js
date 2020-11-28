/* app.js Phrase Hunter */

let game;

// Start new Game by clicking start button
document.getElementById('btn__reset')
        .addEventListener("click", event => {
        game = new Game();
        game.startGame();
        }
);

// Event listener for getting button and pass key to handleInteraction()
document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("click", event => {
        game.handleInteraction(key);
    })
})


