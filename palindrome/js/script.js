// After asking the user to insert a word, create a function to determine whether said word is palindrome
// Asking user
do {
    var userWord = prompt("Hello, please write a word to see if it is palindrome!");    
} while (!isNaN(userWord));

// Function declaration (function to check if the prompted word is palindrome or not)
function isPalindrome(word) {
    // Making sure all words are lower case
    var lowerCaseWord = word.toLowerCase();

    // Calculating
    for (var i = 0; i < lowerCaseWord.length; i++) {
        if (lowerCaseWord[i] !== lowerCaseWord[lowerCaseWord.length - i - 1]) {
        return false;
        }
    }
    return true;
}

// Display by alert()
if (isPalindrome(userWord)) {
    alert("Your word is palindrome!");
} else {
    alert("Your word is not palindrome...");
}