/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        // Target ul emelemnt and identify which ul element it concerns
        let ull = document.getElementsByTagName('ul');
        let ul = ull[0];
        // Split the phrase into letters and loop through them
        const letters = this.phrase.split('');
        letters.forEach(letter => {
            let li = document.createElement('li');
        // Conditional statement for giving different id's
            if(letter !== " ") {
                li.setAttribute("id", ` hide letter ${letter}`)
            } else li.setAttribute("id", "hide space");
        // Define the text in the li
            li.innerHTML = letter;
        // Append li to the ul
            ul.appendChild(li);
        })
    }
}

