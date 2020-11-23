/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        // Target ul element and identify which ul element it concerns
        let ull = document.getElementsByTagName('ul');
        let ul = ull[0];
        // Split the phrase into letters and loop through them
        const letters = this.phrase.split('');
        letters.forEach(letter => {
            let li = document.createElement('li');
        // Conditional statement for giving different id's
            if(letter !== " ") {
                li.setAttribute("class", ` hide letter ${letter}`)
            } else li.setAttribute("class", "hide space");
        // Define the text in the li
            li.innerHTML = letter;
        // Append li to the ul
            ul.appendChild(li);
        })
    }
    checkLetter() {
        // Create an array HTML object key
        const keyboard = Array.from(document.getElementsByClassName('key'));
        // Create an array from current phrase
        let phraseArray = Array.from(this.phrase);
        // console.log(phraseArray);

        /* Check when use parameter
        const check = phraseArray.includes(letter);
        console.log(check);
        */
        // Add event listener for selected letter and stores selected letter in variable
        keyboard.forEach(keys => {
            keys.addEventListener("click", event => {
                const character = keys.innerHTML;
                // check if character is in phrase
                const check = phraseArray.includes(character);
                console.log(check);
            });

        });
    }
}



