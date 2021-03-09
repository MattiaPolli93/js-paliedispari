// Ask the user choose between even or odd, then to insert a number between 1 to 5. Generate a random number for the computer, then sum the two numbers: declare who won by checking whether the sum is even or odd

// Variables (asking the user)
do {
    var userNumber = parseInt(prompt("Choose a number between 1 and 5:"));
    var userEvenOdd = (prompt("Now type either EVEN or ODD:")).toLowerCase();
} while ((isNaN(userNumber) || (userNumber > 5)) || (!isNaN(userEvenOdd)));

// Displaying user's number
console.log(userNumber);

var sum = userNumber;

// Function declaration (to generate a random number)
function randomNumber() {
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    // Displaying computer number
    console.log(randomNumber);
    return randomNumber;
}

sum += randomNumber();

// Function declaration (to check if the sum of the two numbers is even)
function isEven() {
    return sum % 2 == 0;
}

// Calculating winner
if (isEven(sum)) {
    if (userEvenOdd == "even") {
        alert("You won! The sum " + sum + " is even");
    } else {
        alert("Nooo, you lost. The sum " + sum + " is even")
    }
} else {
    if (userEvenOdd == "even") {
        alert("Nooo, you lost. The sum " + sum + " is odd");
    } else {
        alert("You won! The sum " + sum + " is odd")
    }
}