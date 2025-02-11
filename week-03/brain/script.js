// Function to generate Brainrot Text
function brainrotTranslate(text) {
    const randomCaps = (str) => {
        return str
            .split('')
            .map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()))
            .join('');
    };

    const addRandomRepeats = (str) => {
        return str
            .split(' ')
            .map((word) => {
                if (Math.random() > 0.5) {
                    return word + ' ' + word; // Repeat word randomly
                } else {
                    return word;
                }
            })
            .join(' ');
    };

    const mixLetters = (str) => {
        return str
            .split(' ')
            .map((word) => {
                return word
                    .split('')
                    .sort(() => Math.random() - 0.5) // Randomly shuffle letters
                    .join('');
            })
            .join(' ');
    };

    // Apply transformations
    let brainrotText = text;
    brainrotText = randomCaps(brainrotText);
    brainrotText = addRandomRepeats(brainrotText);
    brainrotText = mixLetters(brainrotText);
    
    return brainrotText;
}

// Event listener for the Translate button
document.getElementById('translateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() === '') {
        alert('Please enter some text to translate.');
        return;
    }

    const translatedText = brainrotTranslate(inputText);
    document.getElementById('outputText').textContent = translatedText;
});
