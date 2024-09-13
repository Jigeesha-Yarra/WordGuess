const wordDisplay = document.getElementById("word-display");
const attemptsRemaining = document.getElementById("attempts-remaining");
const guessInput = document.getElementById("guess-input");
const guessForm = document.getElementById("guess-form");

const words = ["apple", "lion", "coding", "jigeesha", "javascript", "python"];
let currentWord = "";
let attempts = 6;

function chooseWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = "-".repeat(currentWord.length);
}

function updateAttemptsRemaining() {
    attemptsRemaining.textContent = `Attempts remaining: ${attempts}`;
}

function checkGuess(guess) {
    let correctGuesses = 0;
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === guess) {
            wordDisplay.textContent = wordDisplay.textContent.substring(0, i) + guess + wordDisplay.textContent.substring(i + 1);
            correctGuesses++;
        }
    }
    return correctGuesses;
}

function handleGuess(guess) {
    if (attempts > 0) {
        const correctGuesses = checkGuess(guess);
        if (correctGuesses === 0) {
            attempts--;
            updateAttemptsRemaining();
        }
        if (wordDisplay.textContent === currentWord) {
            alert("Congratulations! You guessed the word: " + currentWord);
            chooseWord();
            attempts = 6;
            updateAttemptsRemaining();
        } else if (attempts === 0) {
            alert("Sorry, you ran out of attempts. The word was: " + currentWord);
            chooseWord();
            attempts = 6;
            updateAttemptsRemaining();
        }
    }
}

guessForm.addEventListener("submit", event => {
    event.preventDefault();
    const guess = guessInput.value.toLowerCase();
    if (guess.length === 1) {
        handleGuess(guess);
        guessInput.value = "";
    } else {
        alert("Please enter a single letter.");
    }
});

chooseWord();
updateAttemptsRemaining();