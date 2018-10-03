
// Computer has list of possible guesses
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Tally wins, losses, and guesses so far.
var wins = 0;
var losses = 0;
var guessesLeft = 9; 
var computerGuess = computerGuessed();

//Function for rest of the game. Need to encompass all here for the correct scope.
function computerGuessed() {
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);
        
    //Detect guess from user
    document.onkeypress = function(event) {
        var userGuess = event.key;
        
    //if you've still got chances left, deduct chance
    if (guessesLeft > 0) {
        guessesLeft--;
        document.getElementById("demo").innerHTML ="&nbsp" + guessesLeft;
            
    //Display letter Guesses so far
    var newSpan = document.createElement("span");
        newSpan.textContent= userGuess + ", ";
            
    document.getElementById("demo2").appendChild(newSpan);

    //if userGuess = computer's, add a win!
    if (userGuess === computerGuess) {
      wins++;
      document.getElementById("winCount").innerHTML = wins;
            
    //restart game with a new computerGuess by resetting guessesLeft and calling the computerGuessed function again.
    alert("YOU WIN! The letter was " + computerGuess + "!");
    guessesLeft = 9;
    document.getElementById("demo").innerHTML = "&nbsp" + guessesLeft;
    document.getElementById("demo2").innerHTML = "&nbsp";

      computerGuessed();
            }
        }
            
    if (guessesLeft === 0) {
      losses++;
      document.getElementById("lossCount").innerHTML = losses;
      alert("YOU LOSE");

    //restart game with a new computerGuess by resetting guessesLeft calling the computerGuessed function again.
      guessesLeft = 9;
      document.getElementById("demo").innerHTML = "&nbsp" + guessesLeft;
      document.getElementById("demo2").innerHTML = "&nbsp";
        computerGuessed();
        }
            

    }
    
}