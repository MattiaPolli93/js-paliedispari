// Ask the user choose between even or uneven, then to insert a number between 1 to 5. Generate a random number for the computer, then sum the two numbers: declare who won by checking whether the sum is even or uneven

// Variables (user input)
var userNumber = parseInt(prompt("Choose a number bewteen 1 and 5"));
var userEvenUneven = (prompt("Choose: even or uneven")).toLowerCase();

// Function declaration (to calculate a random number)
function randomNumber() {
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
}