
    // Array of letters
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Score.
    var wins = 0;
    var losses = 0;
    var ties = 0;

    // Event key.
    document.onkeyup = function(event) {
    console.log(event);
      // The key that's pressed by the user.
      var userGuess = event.key;
  

      // Computer chooses random words.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    
      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") ||  (userGuess === "z")) {

      }

        if ((userGuess === "a", "b", "c,") && (computerGuess === "a", "b", "c")) {
          wins++;
        } else if ((userGuess === "e", "d", "f") && (computerGuess === "a", "b", "c", "d")) {
          losses++;
        } else if ((userGuess === "m", "n", "o", "k", "l") && (computerGuess === "s", "t", "u", "v")) {
          losses++;
        } else if ((userGuess === "k", "t", "u", "v", "w") && (computerGuess === "m", "n", "o", "p", "q")) {
          wins++;
        } else if ((userGuess === "y", "f") && (computerGuess === "z", "e")) {
          wins++;
        } else if ((userGuess === "x", "e", "j") && (computerGuess === "x", "e", "j")) {
          losses++;
        } else if (userGuess == computerGuess) {
          ties++;
        }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
