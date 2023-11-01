function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    var words = sentence.split(" ");

    // Reverse each word and join them back
    for (var i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }

    // Join the reversed words to form the new sentence
    var reversedSentence = words.join(" ");
    return reversedSentence;
}

function reverseWord(word) {
    // Reverse a single word
    var reversed = "";
    for (var i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

// Take input from the user
var inputSentence = prompt("Enter a sentence:");
var reversedResult = reverseWordsInSentence(inputSentence);
console.log("Reversed sentence: " + reversedResult);
